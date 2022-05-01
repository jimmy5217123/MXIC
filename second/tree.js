export const MainGroup = {
	"fields":["GroupID","ProdID"],
	"kind":["String","String"],
	"items":[
		["GroupAA","Prod1"],
		["GroupBB","Prod4"],
		["GroupAA","Prod2"] // AA?
	]
};

export const SubGroup = {
	"fields":["GroupID","ParentGroupID","Level"],
	"kind":["String","String","Int32"],
	"items":[
		["Prod1_1","Prod1",2],
		["Prod1_2","Prod1",2],
		["Prod1_2_1","Prod1_2",3],
		["Prod2_2","Prod2",2],
	]
};
