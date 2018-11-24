pragma solidity ^0.4.4;

contract FlightTicket {
    
    address owner;
    address validator;
    string public _flightNumber;
    string public _departure;
    string public _arrival;
    string public _from;
    string public _to;
    string public _date;
    uint public _price;
    mapping (uint => uint) _refundPolicy;
    mapping (string => string) _airlineDetails;
    mapping (string => string) _userDetails;
    
    uint public _delay;
    uint public _percentRefund;
    uint public _totalRefund;

    event flightValidation(string indexed userAccount, string indexed airlineAccount, uint indexed userRefund);
    
    constructor(string flightNumber, string departure, string arrival, string from, string to, string date, uint price) public {
        owner = msg.sender;
        validator = msg.sender;
        _flightNumber = flightNumber;
        _departure = departure;
        _arrival = arrival;
        _from = from;
        _to = to;
        _date = date;
        _price = price;
        _userDetails["userAccount"] = "4937284758493839";
        _airlineDetails["airlineAccount"] = "1726349483839309";
        _refundPolicy[100] = 10; //100 minutes later = 10% refund
        _refundPolicy[200] = 20;
        _refundPolicy[300] = 50;
    }
    
    function validateFlight(uint delay) public onlyValidator{
        if (delay <= 100) {
            _delay = 100;
        }
        else if (delay <= 200) {
            _delay = 200;
        }
        else {
            _delay = 300;
        }
        _percentRefund = _refundPolicy[_delay];
        _totalRefund = (_percentRefund*_price)/100;
        emit flightValidation(_userDetails["userAccount"], _airlineDetails["airlineDetails"], _totalRefund);
    }


    modifier onlyOwner {
        require(msg.sender == owner, "Sender not authorized.");
        _;
    }

    modifier onlyValidator {
        require(msg.sender == validator, "Sender not authorized.");
        _;
    }
}
