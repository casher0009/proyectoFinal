const Schema = require("mongoose").Schema;
const orderSchema = new require("mongoose").Schema(
{
  
},
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = require("mongoose").model("Order", orderSchema);
