
import { getUpiDetails } from "@/functions/create-payment";

export class UpiDetailsService {
  static async getUpiDetails() {
    return getUpiDetails();
  }
}
