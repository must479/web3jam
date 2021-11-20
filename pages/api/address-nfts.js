import { isValidEthAddress } from "../../util/string-validators";
import { retrieveNftsByAddress } from "../../lib/nft-port-api-wrapper";
// TODO: add logging and error handling
export default async function handler(req, res) {
  const { query } = req;
  if (!query) {
    res.status(400).send("Missing query parameters");
  }

  const response =
    query.hasOwnProperty("address") && isValidEthAddress(query.address)
      ? await retrieveNftsByAddress(req.query.address)
      : { data: "no data" };

  console.log(JSON.stringify(query));
  res.status(200).json(response);
}