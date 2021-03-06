// 引入 mongoose
const mongoose = require("mongoose");

// 连接 mongodb 数据库
mongoose.connect('mongodb://localhost/MineMineMarket');

// 创建供应商Schema、账单Schema
const SupplierSchema = new mongoose.Schema({
	supname : String,
	people : String,
	phone : String,
	address : String,
	fax: String,
	publish_time: String
});
const BillSchema = new mongoose.Schema({
	name : String,
	unit : String,
	numb : String,
	sum : Number,
	supplier : String,
	payment: String,
	publish_time: String
});
const userSchema = new mongoose.Schema({
	username: String,
	password: String
});

//根据用户Schema创建用户模型
const User = mongoose.model("user", userSchema);
// 根据供应商Schema创建供应商模型
const Supplier = mongoose.model("supplierManager", SupplierSchema);
// 根据账单Schema创建账单模型
const Bill = mongoose.model("billManager", BillSchema);

module.exports = {Supplier ,Bill ,User};