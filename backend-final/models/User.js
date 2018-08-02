const passportLocalMongoose = require("passport-local-mongoose");
const Schema = require("mongoose").Schema;
const userSchema = new require("mongoose").Schema(
  {
    username: String,
    photoURL:{
      type:String,
      default:"https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Party-Poppers-512.png"
    },
    email: String,
    addres: [
      {
        location: {
          type: {
            type: String,
            default: "Point"
          },
          address: String,
          coordinates: [
            {
              type: Number
            }
          ]
        }
      }
    ],
    role: {
      type: String,
      enum: ["USER", "PROVIDER ", "ADMIN"],
      default: "USER"
    },
    orders:[{
      type: Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = require("mongoose").model("User", userSchema);
