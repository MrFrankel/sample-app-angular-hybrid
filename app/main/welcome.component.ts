class WellcomeController {

  gridOptions: {
    columnDefs: [
      { headerName: "Make", field: "make" },
      { headerName: "Model", field: "model" },
      { headerName: "Price", field: "price" }
      ],

    rowData: [
      { make: "Toyota", model: "Celica", price: 35000 },
      { make: "Ford", model: "Mondeo", price: 32000 },
      { make: "Porsche", model: "Boxter", price: 72000 }
      ];
  };

  constructor() {
    this.gridOptions = {
      columnDefs: [
        { headerName: "Make", field: "make" },
        { headerName: "Model", field: "model" },
        { headerName: "Price", field: "price" }
      ],

        rowData: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ]
    };
  }

}

export const welcome = {
  controller: WellcomeController,
  template: `    
   <div ag-grid="$ctrl.gridOptions" class="ag-fresh" style="height: 100%; line-height: 1.4; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; color: #222;"></div>`
};
