qx.Class.define("teamtwitter.MusicManager",{

	extend : qx.ui.groupbox.GroupBox,

// Constructor
	construct : function(){
		this.base(arguments);
		this._initLayout();
	},
	// Member
	members : {
	 _initLayout : function(){
	 	this.getBoxHeader();
	 	this.getBoxNative();
	 },
	 
	 getBoxHeader : function() {
			// auto size
			var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(5))
					.set({
								decorator : "main",
								allowGrowX : false
							});
			var label = new qx.ui.basic.Label("Music Manager").set({font : new qx.bom.Font(50, ["Verdana", "sans-serif"])});
			container.add(label);

			return container;
		},

		getBoxNative : function() {
			// auto size
			var container = new qx.ui.container.Composite(new qx.ui.layout.HBox(250))
					.set({
								decorator : "main",
								allowGrowX : false
							});
			var btnAdd = new qx.ui.form.Button("Add");
			var textfield = new qx.ui.form.TextField("Search");

			container.add(btnAdd);
			container.add(textfield);

			return container;
		}
	}
});