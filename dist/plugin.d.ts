import { Chart } from 'chart.js';
export declare class ChartDatasourcePrometheusPlugin {
    id: string;
    beforeInit(chart: Chart, options: any): void;
    afterInit(chart: Chart, args: any, _options: any): void;
    beforeUpdate(chart: Chart, args: any, _options: any): void;
    beforeRender(chart: Chart, args: any, _options: any): void;
    destroy(chart: Chart, args: any, _options: any): void;
}
