qx.Class.define("teamtwitter.Model",{

	extend : qx.ui.groupbox.GroupBox,
	// Constructor
	construct : function(){
		this.base(arguments);
		this._initLayout();
	},
	// Member
	members : {
	 _initLayout : function(){
	 	this.getBoxSection();
	 },
	 
		getBoxSection : function() {
			// auto size
			var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
					.set({
								decorator : "main",
								allowGrowX : false
							});

			// table model
			var tableModel = this._tableModel = new qx.ui.table.model.Simple();
			tableModel.setColumns(["ID", "Person", "Country"]);
			tableModel.setColumnEditable(1, true);
			tableModel.setColumnEditable(2, true);

			// table
			var table = new qx.ui.table.Table(tableModel);

			table.set({
						width : 600,
						height : 400,
						decorator : null
					});
			container.add(table);
			return container;
		}
	}
	
})