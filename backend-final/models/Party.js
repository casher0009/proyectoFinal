const Schema = require("mongoose").Schema;
const partySchema = new require("mongoose").Schema(
  {
    partyName: String,
    chairs:Number,
    tables:Number,
    
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = require("mongoose").model("Party", partySchema);
