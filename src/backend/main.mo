import List "mo:core/List";
import Text "mo:core/Text";

actor {
  type Lead = {
    name : Text;
    brandName : Text;
    budgetRange : Text;
    contactNumber : Text;
    email : Text;
  };

  let leads = List.empty<Lead>();

  public shared ({ caller }) func submitLead(name : Text, brandName : Text, budgetRange : Text, contactNumber : Text, email : Text) : async () {
    let lead : Lead = {
      name;
      brandName;
      budgetRange;
      contactNumber;
      email;
    };
    leads.add(lead);
  };

  public query ({ caller }) func getLeads() : async [Lead] {
    leads.toArray();
  };
};
