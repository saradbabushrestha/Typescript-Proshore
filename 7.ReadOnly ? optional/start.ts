type User = {
  readonly _id: number;
  name: string;
  email: string;
  isActive: boolean;
  creditcardDetail?: number;
};

let myUser: User = {
  _id: 1245,
  name: "s",
  email: "h@dev.com",
  isActive: false,
};

myUser.email = "sasa@dev.com";

type cardNumber = {
  cardnumber: string;
};

type cradDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cradDate & {
    cvv: number;
  };

// myUser._id = 345;
