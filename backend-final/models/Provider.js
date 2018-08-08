const passportLocalMongoose = require("passport-local-mongoose");
const Schema = require("mongoose").Schema;
const providerSchema = new require("mongoose").Schema(
  {
    Provider: String,
    phone: Number,
    photoURL:{
      type:String,
      default:"http://fiestasyeventos.mx/contenido/uploads/2016/07/logo-fiestas-y-eventos-390x200.png"
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

module.exports = require("mongoose").model("Provider", providerSchema);
