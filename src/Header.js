import React, { Component } from "react";

import {
    Container,
    Dropdown,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react'
import Routes from "./Routes";
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    const data = {
        "_id": "GH768",
    "userId": "Sergi Sanchez",
    "departure": "16:00",
    "arrival": "20:50",
    "from": "BCN",
    "to": "LONDON LUTON",
    "date": "23-11-18",
    "price": 120,
    "airline": "Easyjet",
  };

    render() {

        return (
            <div>
                <script type="text/javascript">
                    function onVisaCheckoutReady() {
                        V.init({
                            apikey: "7SJPAU6CVEYDL3OXG87R218N-Vn0kZnZJveHocjtuHVUuenbI",
                            paymentRequest: {
                                currencyCode: "USD",
                                subtotal: "11.00"
                            }
                        });
                    const axios = require('axios');
              
      V.on("payment.success", function (payment) {

        axios.post('http://6c407f31.ngrok.io/blockchain/getBuyList',  {data});
                    window.location.replace("/myflights");
                  });
      V.on("payment.cancel", function (payment) {alert(JSON.stringify(payment)); });
      V.on("payment.error", function (payment, error) {alert(JSON.stringify(error)); });
                  }
  </script></div>
        );
    }
}

export default App