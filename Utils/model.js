const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false,
    },
    verified: {
      type: String,
      enum: ["true", "false"],
      default: false,
    },

    createWith: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },

    Notification: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);
const currencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: false,
    },
    verified: {
      type: String,
      enum: ["true", "false"],
      default: false,
    },

    createWith: {
      type: String,
      required: false,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const allcurrencySchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },

  currency: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  flag: {
    type: String,
    required: true,
  },
  favourite: {
    type: boolean,
    default: false,
    required: true,
  },
});

const rateSchema = new mongoose.Schema(
  {
    base_currency: {
      type: String,
      required: true,
    },
    target_Currencies: {
      type: Array,
      required: true,
    },
    flag: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


//server theke data asha lagbe currency er jonne 