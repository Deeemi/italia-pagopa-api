import * as soap from "soap";

import { IPPTPortSoap } from "./wsdl-lib/PagamentiTelematiciPspNodoservice/PPTPort";

const NODO_WSDL = "wsdl/nodo/NodoPerPsp.wsdl";

/**
 * Helper method that wraps the creation of a WSDL client within a Promise and
 * adds the typed interfaces generated by wsdl-to-ts.
 */
function createClient<T>(wsdlUri: string, options: soap.IOptions): Promise<soap.Client & T> {
  return new Promise((resolve, reject) => {
    soap.createClient(NODO_WSDL, options, (err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(client as soap.Client & T);
      }
    });
  })
}

/**
 * Creates a client for the "Nodo" service
 */
export function createNodoClient(options: soap.IOptions) {
  return createClient<IPPTPortSoap>(NODO_WSDL, options);
}