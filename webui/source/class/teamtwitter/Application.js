qx.Class.define("teamtwitter.Application", {
	extend : qx.application.Standalone,

	/*
	 * ****************************************************************************
	 * MEMBERS
	 * ****************************************************************************
	 */

	members : {
		groupBox : null,
		nameField : null,
		authorField : null,
		addBtn : null,
		deleteBtn : null,
		updateBtn : null,
		table : null,
		id : 0,
		main : function() {
			this.base(arguments);
			qx.log.appender.Native;
			qx.log.appender.Console;
			this.__initLayout();
		},

		__initLayout : function() {
			this.groupBox = new qx.ui.groupbox.GroupBox("Person");
			this.groupBox.setWidth(600);
			var groupLayout = new qx.ui.layout.VBox(10);
			this.groupBox.setLayout(groupLayout);

			var container = new qx.ui.container.Composite(new qx.ui.layout.Grid(
					3, 2)).set({
						paddingLeft : 100
					});
			var layout = container.getLayout();

			layout.setColumnAlign(0, "right", "middle");
			layout.setColumnAlign(1, "left", "middle");

			var nameLabel = new qx.ui.basic.Label(this.tr("Name:")).set({
						marginTop : 5
					});
			this.nameField = new qx.ui.form.TextField().set({
						width : 150,
						marginTop : 5
					});

			var authorLabel = new qx.ui.basic.Label(this.tr("Country:")).set({
						marginTop : 5
					});
			this.authorField = new qx.ui.form.TextField().set({
						width : 150,
						marginTop : 5
					});

			var btnBox = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
					.set({
								marginTop : 5
							});
			this.addBtn = new qx.ui.form.Button(this.tr("Add"));
			this.deleteBtn = new qx.ui.form.Button(this.tr("Update"));
			this.updateBtn = new qx.ui.form.Button(this.tr("Delete"));

			btnBox.add(this.addBtn);
			btnBox.add(this.deleteBtn);
			btnBox.add(this.updateBtn);

			container.add(nameLabel, {
						row : 0,
						column : 0
					});
			container.add(this.nameField, {
						row : 0,
						column : 1
					});
			container.add(authorLabel, {
						row : 1,
						column : 0
					});
			container.add(this.authorField, {
						row : 1,
						column : 1
					});
			container.add(btnBox, {
						row : 2,
						column : 1
					});

			var tableModel = new qx.ui.table.model.Simple();
			tableModel.setColumns([this.tr("id"), this.tr("Name"),
					this.tr("Country")]);

			var custom = {
				tableColumnModel : function(obj) {
					return new qx.ui.table.columnmodel.Resize(obj);
				},
				initiallyHiddenColumns : []
			};

			this.table = new qx.ui.table.Table(tableModel, custom);
			this.table.tableModel = tableModel;
			this.table.setColumnVisibilityButtonVisible(false);

			var tcm = this.table.getTableColumnModel();
			tcm.getBehavior().setWidth(0, "10%");
			tcm.getBehavior().setWidth(1, "30%");
			tcm.getBehavior().setWidth(2, "60%");
			
			var rowData = [];
			rowData.push([1, "Huy", "Viet Nam"]);
			rowData.push([2, "Nhan", "Viet Nam"]);
     		rowData.push([3, "Davis", "England"]);
		    rowData.push([4, "Bob", "Germany"]); 
		    
      		tableModel.setData(rowData);
      

			this.groupBox.add(container);
			this.groupBox.add(this.table);
			this.getRoot().add(this.groupBox, {
						left : 350,
						top : 10
					});

		}
	}

});
