// SPDX-License-Identifier: MIT
// The line above is recommended and let you define the license of your contract
// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.

pragma solidity ^0.8.0;

// tutorial-hardhat-deploy
// This is the main building block for smart contracts.

contract MyOracle {
  // An address type variable is used to store ethereum accounts.
  address public owner;
  address[] public addresses;
  string public metaData;

  bool private initialized;

  // function initialize(address _owner) public {
  //     require(!initialized, 'Contract instance has already been initialized');
  //     initialized = true;
  //     owner = _owner;
  // }

  struct Location {
    string lat;
    string lon;
    string name;
  }

  mapping(address => bool) public whitelistAddress;
  mapping(address => uint256) public values;

  mapping(string => Location) public sensors;
  mapping(string => uint8) public sensorsValue;

  uint256[] public arr;
  Location[] public locations;

  event OracleUpdate(address indexed sender, uint256 idx, uint256 value);
  event AddLocation(string lat, string lon, string name);
  event AddWhitelist(address indexed addr);
  event RemoveWhitelist(address indexed addr);

  function setMeta(
    uint256 idx,
    string memory lat,
    string memory lon,
    string memory name
  ) public {
    // Location memory loc = Location(lat, lon, name);
    // locations.push

    locations[idx].lat = lat;
    locations[idx].lon = lon;
    locations[idx].name = name;
  }

  function addLocation(
    string memory lat,
    string memory lon,
    string memory name
  ) public {
    require(sensorsValue[name] == 0, 'Location already exists.');
    emit AddLocation(lat, lon, name);
    sensorsValue[name] = 1;
    locations.push(Location(lat, lon, name));
  }

  // function findMapLocation(uint256 slot, uint256 key) public pure returns (uint256) {
  //     return uint256(keccak256(abi.encode(key, slot)));
  // }

  function getAllLocations() public view returns (Location[] memory) {
    return locations;
  }

  function get(uint256 i) public view returns (uint256) {
    return arr[i];
  }

  function getArr() public view returns (uint256[] memory) {
    return arr;
  }

  function getLength() public view returns (uint256) {
    return arr.length;
  }

  // function set(uint256 i, uint256 value) public {
  //     if (arr.length <= i) {
  //         arr.push(0);
  //     }
  //     arr[i] = value;
  //     emit OracleUpdate(msg.sender, i, value);
  // }

  function setArr(uint256[10] memory _values) public {
    arr = _values;
  }

  function remove(uint256 index) public {
    delete arr[index];
  }

  function addWhitelist(address _addr) external {
    require(_addr != address(0), 'Invalid address');
    require(!whitelistAddress[_addr], 'Already whitelisted');
    emit AddWhitelist(_addr);
    whitelistAddress[_addr] = true;
  }

  function removeWhitelist(address _addr) external {
    require(whitelistAddress[_addr], 'Address not found');
    emit RemoveWhitelist(_addr);
    delete whitelistAddress[_addr];
  }

  /**
   * Contract initialization.
   *
   * The `constructor` is executed only once when the contract is created.
   */
  constructor(address _owner) {
    owner = _owner;
    whitelistAddress[owner] = true;
  }

  /**
   * A function to updateValue tokens.
   *
   * The `external` modifier makes a function *only* callable from outside
   * the contract.
   */
  function updateValue(address to, uint256 amount) external returns (uint256) {
    if (values[to] == 0) {
      addresses.push(to);
    }
    // addresses.push(to);
    values[to] = amount;
    return values[to];
  }

  function getAddressList() external view returns (address[] memory) {
    return addresses;
  }

  /**
   * Read only function to retrieve the token balance of a given account.
   *
   * The `view` modifier indicates that it doesn't modify the contract's
   * state, which allows us to call it without executing a transaction.
   */
  function valueOf(address account) external view returns (uint256) {
    return values[account];
  }

  function getValueAt(address account) external view returns (uint256) {
    return values[account];
  }

  function balanceOf(address account) external view returns (uint256) {
    return values[account];
  }

  function dummy() external pure returns (string memory) {
    return 'hey';
  }
}
