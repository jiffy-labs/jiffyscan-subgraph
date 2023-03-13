import {
  AccountDeployed as AccountDeployedEvent,
  Deposited as DepositedEvent,
  SignatureAggregatorChanged as SignatureAggregatorChangedEvent,
  StakeLocked as StakeLockedEvent,
  StakeUnlocked as StakeUnlockedEvent,
  StakeWithdrawn as StakeWithdrawnEvent,
  UserOperationEvent as UserOperationEventEvent,
  UserOperationRevertReason as UserOperationRevertReasonEvent,
  Withdrawn as WithdrawnEvent
} from "../generated/EntryPoint/EntryPoint"
import {
  AccountDeployed,
  Deposited,
  SignatureAggregatorChanged,
  StakeLocked,
  StakeUnlocked,
  StakeWithdrawn,
  UserOp,
  Withdrawn,
  EVMAddress,
  Hash,
  Bundle
} from "../generated/schema"
import {
  AddressType,
  HashType
} from "../utils/constants"
import { log, ethereum, ByteArray, Bytes, Address, BigInt, dataSource } from '@graphprotocol/graph-ts'


const BIGINT_ONE = BigInt.fromI32(1);

export function handleAccountDeployed(event: AccountDeployedEvent): void {
  let entity = new AccountDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.userOpHash = event.params.userOpHash
  entity.sender = event.params.sender
  entity.factory = event.params.factory
  entity.paymaster = event.params.paymaster

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposited(event: DepositedEvent): void {
  let entity = new Deposited(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.totalDeposit = event.params.totalDeposit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSignatureAggregatorChanged(
  event: SignatureAggregatorChangedEvent
): void {
  let entity = new SignatureAggregatorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.aggregator = event.params.aggregator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeLocked(event: StakeLockedEvent): void {
  let entity = new StakeLocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.totalStaked = event.params.totalStaked
  entity.unstakeDelaySec = event.params.unstakeDelaySec

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeUnlocked(event: StakeUnlockedEvent): void {
  let entity = new StakeUnlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawTime = event.params.withdrawTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakeWithdrawn(event: StakeWithdrawnEvent): void {
  let entity = new StakeWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawAddress = event.params.withdrawAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUserOperationEvent(event: UserOperationEventEvent): void {
  let userOp = UserOp.load(event.params.userOpHash.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.userOpHash.toHex())
  }
  addToBundle(event);

  userOp.userOpHash = event.params.userOpHash
  userOp.transactionHash = event.transaction.hash
  userOp.bundle = event.transaction.hash.toHex();
  userOp.input = event.transaction.input
  userOp.sender = event.params.sender
  userOp.paymaster = event.params.paymaster
  userOp.nonce = event.params.nonce
  userOp.actualGasCost = event.params.actualGasCost
  userOp.actualGasUsed = event.params.actualGasUsed
  userOp.success = event.params.success
  userOp.blockTime = event.block.timestamp
  userOp.blockNumber = event.block.number
  userOp.network = dataSource.network();

  if (event.transaction.input.toHexString().slice(2,10) == "1fad948c") {
    const decodedUserOpInputs = decodeUserOpInput(event.transaction.input.toHexString(), event.params.nonce);

    userOp.target = Address.fromHexString('0x' + decodedUserOpInputs.callData.toHexString().slice(34, 74));
    userOp.callData = decodedUserOpInputs.callData;
    userOp.factory = Address.fromHexString(decodedUserOpInputs.initCode.toHexString().slice(0, 42));
    userOp.beneficiary = Address.fromHexString("0x" + event.transaction.input.toHexString().slice(98, 138).toString());

    if (Address.fromHexString(decodedUserOpInputs.initCode.toHexString().slice(0, 42)).toHexString() != "0x") {
      storeAddress(event.params.sender, AddressType.WALLET);
      storeAddress(Address.fromHexString(decodedUserOpInputs.initCode.toHexString().slice(0, 42)), AddressType.FACTORY);
    }
  }

  storeAddress(Address.fromHexString("0x" + event.transaction.input.toHexString().slice(98, 138).toString()), AddressType.BENEFICIARY);
  if (event.params.paymaster.toHexString() != "0x0000000000000000000000000000000000000000") {
    storeAddress(event.params.paymaster, AddressType.PAYMASTER);
  }

  storeHash(event.transaction.hash, HashType.TRANSACTION_HASH);
  storeHash(event.params.userOpHash, HashType.USER_OP_HASH);

  
  userOp.save();
}

export function handleUserOperationRevertReason(
  event: UserOperationRevertReasonEvent
): void {
  let userOp = UserOp.load(event.params.userOpHash.toHex())
  if (userOp == null) {
    userOp = new UserOp(event.params.userOpHash.toHex())
  }
  addRevertToBundle(event);

  userOp.userOpHash = event.params.userOpHash
  userOp.bundle = event.transaction.hash.toHex()
  userOp.transactionHash = event.transaction.hash
  userOp.input = event.transaction.input
  userOp.sender = event.params.sender
  userOp.revertReason = event.params.revertReason
  userOp.network = dataSource.network();
  userOp.success = false
  userOp.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account
  entity.withdrawAddress = event.params.withdrawAddress
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

function storeAddress(evmAddress: Bytes, type: string): void {
  let evmAddressEntity = EVMAddress.load(evmAddress.toHex())
  if (evmAddressEntity == null) {
    evmAddressEntity = new EVMAddress(evmAddress.toHex())
  } else {
    return;
  }
  evmAddressEntity.address = evmAddress
  evmAddressEntity.Addresstype = type
  evmAddressEntity.save();
}

function storeHash(hash: Bytes, type: string): void {
  let hashEntity = Hash.load(hash.toHex())
  if (hashEntity == null) {
    hashEntity = new Hash(hash.toHex())
  } else {
    return;
  }
  hashEntity.hash = hash
  hashEntity.HashType = type
  hashEntity.save();
}

const prefix = "0x000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000";

export class UserOpTuple extends ethereum.Tuple {
  get senderAddress(): Address {
    return this[0].toAddress();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get initCode(): Bytes {
    return this[2].toBytes();
  }

  get callData(): Bytes {
    return this[3].toBytes();
  }

  get callGasLimit(): BigInt {
    return this[4].toBigInt();
  }

  get varificationGasLimit(): BigInt {
    return this[5].toBigInt();
  }

  get preVerificationGas(): BigInt {
    return this[6].toBigInt();
  }

  get maxFeePerGas(): BigInt {
    return this[7].toBigInt();
  }

  get maxPriorityFeePerGas(): BigInt {
    return this[8].toBigInt();
  }

  get paymasterAndData(): Bytes {
    return this[9].toBytes()
  }

  get signature(): Bytes {
    return this[10].toBytes()
  }
}


function decodeUserOpInput(userOpInput: string, nonce: BigInt): UserOpTuple {
  const inputParams = Bytes.fromHexString(userOpInput.slice(10));

  const decoded = ethereum.decode("(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes)[]", inputParams);
  if (decoded == null) {
    return new UserOpTuple;
  }

  const userOpInputTupleArray = decoded.toTupleArray<UserOpTuple>();
  let decodedUserOpInput = new UserOpTuple;
  for (let i = 0; i < userOpInputTupleArray.length; i++) {
    if (userOpInputTupleArray[i].nonce == nonce) {
      decodedUserOpInput = userOpInputTupleArray[i];
      break;
    }
  }

  return decodedUserOpInput;
}


//Example input 
// 0x1fad948c0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000dbd510f9ebb7a81209fccd12a56f6c6354aa8cab000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000003ba340bc4194d7315c6f9f19aabc5f4a5cdc2e220000000000000000000000000000000000000000000000000000000000000003000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000493e0000000000000000000000000000000000000000000000000000000000003d0900000000000000000000000000000000000000000000000000000000000005d7000000000000000000000000000000000000000000000000000000000597771400000000000000000000000000000000000000000000000000000000059682f0000000000000000000000000000000000000000000000000000000000000004a000000000000000000000000000000000000000000000000000000000000005600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002c4f34308ef00000000000000000000000040a2accbd92bca938b02010e17a5b8929b49130d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a48d80ff0a00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000152007ddefa2f027691116d0a7aa6418246622d70b12a00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000044095ea7b3000000000000000000000000a275da33fe068cd62510b8e3af7818ede891cdff0000000000000000000000000000000000000000000000000005b7e11a47f000000014f33fc01017d9ac6762e8285b51ad07089e51000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000649b890b700000000000000000000000003ba340bc4194d7315c6f9f19aabc5f4a5cdc2e22000000000000000000000000ffcc60e7dbf2c9accdb0b8caa699d7b50086c8070000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000091a275da33fe068cd62510b8e3af7818ede891cdff0000000000000000000000000005ba1044cbc00000000000000000000000000000015549b2f3b4007ddefa2f027691116d0a7aa6418246622d70b12a6a27a1a4dd4981e40f406dcef00a654b997f0d1e97b9c9d904e497d6770822215c49b80b54abe913192231475ce47b6ca4a38518440e209941e0592d6bc414891b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000413a177d93f69420b30a4b870a016171e2b088b8db1ffddab4221c5e326c4bfd3101afb0daad0e623f926ac626248bdeb3b08ef2e9781478f3c78961af4fb4e7931b00000000000000000000000000000000000000000000000000000000000000

function addToBundle(event: UserOperationEventEvent): void {
  let bundle = Bundle.load(event.transaction.hash.toHex())
  if (bundle == null) {
    bundle = new Bundle(event.transaction.hash.toHex())
    bundle.blockNumber = event.block.number
    bundle.timestamp = event.block.timestamp
    bundle.transactionHash = event.transaction.hash
    // bundle.userOps = []
    bundle.userOpsLength = new BigInt(0);
    bundle.network = dataSource.network();
  }
  // bundle.userOps.push(event.params.userOpHash.toHex());
  bundle.userOpsLength = BIGINT_ONE.plus(bundle.userOpsLength)
  bundle.save() 
}

function addRevertToBundle(event: UserOperationRevertReasonEvent): void {
  let bundle = Bundle.load(event.transaction.hash.toHex())
  if (bundle == null) {
    bundle = new Bundle(event.transaction.hash.toHex())
    bundle.blockNumber = event.block.number
    bundle.timestamp = event.block.timestamp
    bundle.transactionHash = event.transaction.hash
    // bundle.userOps = []
    bundle.userOpsLength = new BigInt(0);
    bundle.network = dataSource.network();
  }
  // bundle.userOps.push(event.params.userOpHash.toHex());
  bundle.userOpsLength = BIGINT_ONE.plus(bundle.userOpsLength)
  bundle.save()
  
}