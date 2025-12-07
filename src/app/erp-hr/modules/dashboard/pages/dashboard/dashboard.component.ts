import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexFill,
  ApexGrid,
  ApexResponsive,
} from "ng-apexcharts";
import { TokenStorageService } from "src/app/core/service/token-storage.service";

export type chartOptions = {
  series: ApexAxisChartSeries;
  radialseries: ApexNonAxisChartSeries;
  series2: ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  grid: ApexGrid;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
  responsive: ApexResponsive[];
  labels: string[];
  
};

type NavEntry = {
  type: "item" | "heading";
  label: string;
  modal?: string;
};

type DesktopTile = {
  id: string;
  title: string;
  description: string;
  status: string;
  statusClass: string;
  cta: string;
  metrics: { label: string; value: string }[];
};

type TaskbarItem = {
  id: string;
  title: string;
  icon: string;
  active?: boolean;
};

type StartMenuColumn = {
  title: string;
  apps: { id: string; label: string; icon: string }[];
};

type WorkflowItem = {
  ref: string;
  client: string;
  step: string;
  priority: string;
  badgeClass: string;
  received: string;
};

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public barChartOptions: Partial<chartOptions>;
  public radialChartOptions: Partial<chartOptions>;
  public gaugeChartOptions: Partial<chartOptions>;
  public stackBarChart: Partial<chartOptions>;
  constructor(private tokenStorageService: TokenStorageService) {}
 currentDate: Date = new Date();
 private intervalId: any;

currentUser: any;
  navEntries: NavEntry[] = [
    { type: "item", label: "Reports", modal: "reports" },
    { type: "item", label: "Report Writer", modal: "reports" },
    { type: "heading", label: "Identities" },
    { type: "item", label: "Client Maintenance", modal: "client" },
    { type: "item", label: "Account" },
    { type: "item", label: "Deposit" },
    { type: "item", label: "Limits & Collateral" },
    { type: "item", label: "Workflow Setting" },
    { type: "item", label: "Workflow Loan" },
    { type: "item", label: "Loans", modal: "loans" },
    { type: "item", label: "Overdrafts", modal: "overdraft" },
    { type: "item", label: "Images" },
    { type: "item", label: "Transaction" },
    { type: "item", label: "Process" },
    { type: "item", label: "MicroFinance" },
    { type: "item", label: "Treasury" },
    { type: "item", label: "Trade Finance" },
    { type: "item", label: "Fixed Asset" },
    { type: "item", label: "Other Modules" },
    { type: "item", label: "General Ledger" },
    { type: "item", label: "Product" },
    { type: "item", label: "Charges & Rates" },
    { type: "item", label: "Static Data" },
    { type: "item", label: "System Security" },
    { type: "item", label: "Utilities" },
    { type: "item", label: "System Audit" },
    { type: "item", label: "Clearing" },
    { type: "item", label: "Swift" },
    { type: "item", label: "System Utilities" },
    { type: "item", label: "System BR.NET", modal: "system" }
  ];

  desktopTiles: DesktopTile[] = [
    {
      id: "client",
      title: "Client Maintenance",
      description: "All customer KYC, CIF, and lifecycle updates",
      status: "Active",
      statusClass: "status-active",
      cta: "Open window",
      metrics: [
        { label: "Pending onboarding", value: "14 records" },
        { label: "Approvals waiting", value: "6 workflows" },
        { label: "KYC expiry", value: "3 this week" }
      ]
    },
    {
      id: "overdraft",
      title: "Overdraft Application",
      description: "Simulate limits, documents, and charges",
      status: "Due",
      statusClass: "status-warning",
      cta: "Resume last",
      metrics: [
        { label: "Draft requests", value: "3" },
        { label: "Docs missing", value: "5" },
        { label: "SLA", value: "4 hrs" }
      ]
    },
    {
      id: "workflow",
      title: "Workflow Queue",
      description: "Loan & onboarding approvals routed to you",
      status: "Idle",
      statusClass: "status-idle",
      cta: "Review queue",
      metrics: [
        { label: "Today", value: "28" },
        { label: "Aging > 1d", value: "2" },
        { label: "Escalations", value: "0" }
      ]
    }
  ];

  taskbarItems: TaskbarItem[] = [
    { id: "client", title: "Client Maintenance", icon: "fas fa-user" },
    { id: "overdraft", title: "Overdraft", icon: "fas fa-file-lines" },
    { id: "workflow", title: "Workflow", icon: "fas fa-list-check" }
  ];

  startMenuColumns: StartMenuColumn[] = [
    {
      title: "Customer Journey",
      apps: [
        { id: "client", label: "Client Maintenance", icon: "fas fa-address-card" },
        { id: "overdraft", label: "Overdraft Application", icon: "fas fa-hand-holding-dollar" },
        { id: "workflow", label: "Workflow Queue", icon: "fas fa-route" }
      ]
    },
    {
      title: "Operations Desk",
      apps: [
        { id: "reports", label: "Reports", icon: "fas fa-clipboard-list" },
        { id: "system", label: "System BR.NET", icon: "fas fa-gear" },
        { id: "loans", label: "Loans Portfolio", icon: "fas fa-building-columns" }
      ]
    }
  ];

  workflowQueue: WorkflowItem[] = [
    { ref: "WF-1023", client: "Equatoria Manufacturing", step: "Maker Checker", priority: "High", badgeClass: "badge--danger", received: "34 mins ago" },
    { ref: "WF-1022", client: "Hifadhi Sacco", step: "Limit Review", priority: "Medium", badgeClass: "badge--warning", received: "1 hr ago" },
    { ref: "WF-1018", client: "Retail Onboarding", step: "Docs Upload", priority: "Low", badgeClass: "badge--success", received: "3 hrs ago" }
  ];

  isStartMenuOpen = false;
  activeModal: string | null = null;
  ngOnInit() {
    this.currentUser =this.tokenStorageService.getUser().username;
    this.chart1();
    this.chart2();
        this.intervalId = setInterval(() => {
      this.currentDate = new Date();
    }, 1000);

  }
    ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  toggleStartMenu(): void {
    this.isStartMenuOpen = !this.isStartMenuOpen;
  }

  closeStartMenu(): void {
    this.isStartMenuOpen = false;
  }

  handleNavEntry(entry: NavEntry): void {
    if (entry.type !== "item" || !entry.modal) {
      return;
    }
    this.openModal(entry.modal);
  }

  openModal(id?: string): void {
    if (!id) {
      return;
    }
    this.activeModal = id;
    this.closeStartMenu();
    this.setTaskbarState(id, true);
  }

  closeModal(): void {
    if (this.activeModal) {
      this.setTaskbarState(this.activeModal, false);
    }
    this.activeModal = null;
  }

  private setTaskbarState(id: string, active: boolean): void {
    this.taskbarItems = this.taskbarItems.map((item) =>
      item.id === id ? { ...item, active } : item
    );
  }
  private chart1() {
    this.barChartOptions = {
      series: [
        {
          name: "Number of Orders",
          data: [120, 150, 100, 180, 90, 200],
        },
        {
          name: "Purchase Orders",
          data: [80, 100, 70, 120, 60, 150],
        },
        {
          name: "insurance",
          data: [50, 60, 40, 70, 30, 80],
        },
        {
          name: "Policys",
          data: [30, 40, 25, 45, 20, 50],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true,
        stackType: "100%",
        // **Dark green theme with better contrast:**
        foreColor: "#3C4A59",
      },
      // **Color palette using dark green as base and accessible, harmonious colors:**
      colors: [
        "#3C4A59", // Dark green base
        "#F08080", // Light coral (complementary, accessible contrast)
        "#99CCFF", // Sky blue (light, accessible contrast)
        "#FFA500", // Orange (medium, accessible contrast)
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "35%",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      xaxis: {
        categories: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: "bottom",
        offsetX: 0,
        offsetY: 0,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  

private chart2() {
    this.radialChartOptions = {
        radialseries: [44, 55, 67],
        chart: {
            height: 290,
            type: "radialBar",
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: "22px",
                    },
                    value: {
                        fontSize: "16px",
                    },
                    total: {
                        show: true,
                        label: "Total",
                        formatter: function (w) {
                            return "52%";
                        },
                    },
                },
            },
        },
        labels: ["RFQs", "RFPs", "POs"],
        colors: ["#2E7D32", "#388E3C", "#43A047"], // Dark green colors for each label
    };
}


}
