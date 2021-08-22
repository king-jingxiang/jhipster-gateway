import * as metrics_modal_component from "app/admin/metrics/metrics-modal.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new metrics_modal_component.JhiMetricsMonitoringModalComponent(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
