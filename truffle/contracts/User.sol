pragma solidity ^0.4.6;
contract User{
    address public enterpriseAddress;
    address public owner;
    
    constructor() public{
        owner = msg.sender;
    }
    
    function assignEnterprise(address enterprise) public returns(bool){
        enterpriseAddress = enterprise;
        return true;
    }
    function unAssignEnterprise() public returns(bool){
        enterpriseAddress = 0x0000000000000000000000000000000000000000;
        return true;
    }
    function getEnterprise() public returns(address) {
        return enterpriseAddress;
    }
}
