// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AccountDeployed extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountDeployed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type AccountDeployed must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AccountDeployed", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): AccountDeployed | null {
    return changetype<AccountDeployed | null>(
      store.get("AccountDeployed", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get userOpHash(): Bytes {
    let value = this.get("userOpHash");
    return value!.toBytes();
  }

  set userOpHash(value: Bytes) {
    this.set("userOpHash", Value.fromBytes(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get factory(): Bytes {
    let value = this.get("factory");
    return value!.toBytes();
  }

  set factory(value: Bytes) {
    this.set("factory", Value.fromBytes(value));
  }

  get paymaster(): Bytes {
    let value = this.get("paymaster");
    return value!.toBytes();
  }

  set paymaster(value: Bytes) {
    this.set("paymaster", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class Deposited extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deposited entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Deposited must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Deposited", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Deposited | null {
    return changetype<Deposited | null>(
      store.get("Deposited", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get totalDeposit(): BigInt {
    let value = this.get("totalDeposit");
    return value!.toBigInt();
  }

  set totalDeposit(value: BigInt) {
    this.set("totalDeposit", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class SignatureAggregatorChanged extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save SignatureAggregatorChanged entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type SignatureAggregatorChanged must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SignatureAggregatorChanged", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): SignatureAggregatorChanged | null {
    return changetype<SignatureAggregatorChanged | null>(
      store.get("SignatureAggregatorChanged", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get aggregator(): Bytes {
    let value = this.get("aggregator");
    return value!.toBytes();
  }

  set aggregator(value: Bytes) {
    this.set("aggregator", Value.fromBytes(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class StakeLocked extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeLocked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type StakeLocked must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeLocked", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): StakeLocked | null {
    return changetype<StakeLocked | null>(
      store.get("StakeLocked", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get totalStaked(): BigInt {
    let value = this.get("totalStaked");
    return value!.toBigInt();
  }

  set totalStaked(value: BigInt) {
    this.set("totalStaked", Value.fromBigInt(value));
  }

  get unstakeDelaySec(): BigInt {
    let value = this.get("unstakeDelaySec");
    return value!.toBigInt();
  }

  set unstakeDelaySec(value: BigInt) {
    this.set("unstakeDelaySec", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class StakeUnlocked extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeUnlocked entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type StakeUnlocked must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeUnlocked", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): StakeUnlocked | null {
    return changetype<StakeUnlocked | null>(
      store.get("StakeUnlocked", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get withdrawTime(): BigInt {
    let value = this.get("withdrawTime");
    return value!.toBigInt();
  }

  set withdrawTime(value: BigInt) {
    this.set("withdrawTime", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class StakeWithdrawn extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save StakeWithdrawn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type StakeWithdrawn must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("StakeWithdrawn", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): StakeWithdrawn | null {
    return changetype<StakeWithdrawn | null>(
      store.get("StakeWithdrawn", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get withdrawAddress(): Bytes {
    let value = this.get("withdrawAddress");
    return value!.toBytes();
  }

  set withdrawAddress(value: Bytes) {
    this.set("withdrawAddress", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}

export class EVMAddress extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save EVMAddress entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type EVMAddress must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("EVMAddress", id.toString(), this);
    }
  }

  static load(id: string): EVMAddress | null {
    return changetype<EVMAddress | null>(store.get("EVMAddress", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes | null {
    let value = this.get("address");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set address(value: Bytes | null) {
    if (!value) {
      this.unset("address");
    } else {
      this.set("address", Value.fromBytes(<Bytes>value));
    }
  }

  get Addresstype(): string | null {
    let value = this.get("Addresstype");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set Addresstype(value: string | null) {
    if (!value) {
      this.unset("Addresstype");
    } else {
      this.set("Addresstype", Value.fromString(<string>value));
    }
  }
}

export class Hash extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Hash entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Hash must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Hash", id.toString(), this);
    }
  }

  static load(id: string): Hash | null {
    return changetype<Hash | null>(store.get("Hash", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): Bytes | null {
    let value = this.get("hash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set hash(value: Bytes | null) {
    if (!value) {
      this.unset("hash");
    } else {
      this.set("hash", Value.fromBytes(<Bytes>value));
    }
  }

  get HashType(): string | null {
    let value = this.get("HashType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set HashType(value: string | null) {
    if (!value) {
      this.unset("HashType");
    } else {
      this.set("HashType", Value.fromString(<string>value));
    }
  }
}

export class UserOp extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserOp entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserOp must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserOp", id.toString(), this);
    }
  }

  static load(id: string): UserOp | null {
    return changetype<UserOp | null>(store.get("UserOp", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transactionHash(): Bytes | null {
    let value = this.get("transactionHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set transactionHash(value: Bytes | null) {
    if (!value) {
      this.unset("transactionHash");
    } else {
      this.set("transactionHash", Value.fromBytes(<Bytes>value));
    }
  }

  get userOpHash(): Bytes | null {
    let value = this.get("userOpHash");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set userOpHash(value: Bytes | null) {
    if (!value) {
      this.unset("userOpHash");
    } else {
      this.set("userOpHash", Value.fromBytes(<Bytes>value));
    }
  }

  get sender(): Bytes | null {
    let value = this.get("sender");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set sender(value: Bytes | null) {
    if (!value) {
      this.unset("sender");
    } else {
      this.set("sender", Value.fromBytes(<Bytes>value));
    }
  }

  get paymaster(): Bytes | null {
    let value = this.get("paymaster");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set paymaster(value: Bytes | null) {
    if (!value) {
      this.unset("paymaster");
    } else {
      this.set("paymaster", Value.fromBytes(<Bytes>value));
    }
  }

  get nonce(): BigInt | null {
    let value = this.get("nonce");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set nonce(value: BigInt | null) {
    if (!value) {
      this.unset("nonce");
    } else {
      this.set("nonce", Value.fromBigInt(<BigInt>value));
    }
  }

  get actualGasCost(): BigInt | null {
    let value = this.get("actualGasCost");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set actualGasCost(value: BigInt | null) {
    if (!value) {
      this.unset("actualGasCost");
    } else {
      this.set("actualGasCost", Value.fromBigInt(<BigInt>value));
    }
  }

  get actualGasPrice(): BigInt | null {
    let value = this.get("actualGasPrice");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set actualGasPrice(value: BigInt | null) {
    if (!value) {
      this.unset("actualGasPrice");
    } else {
      this.set("actualGasPrice", Value.fromBigInt(<BigInt>value));
    }
  }

  get actualGasUsed(): BigInt | null {
    let value = this.get("actualGasUsed");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set actualGasUsed(value: BigInt | null) {
    if (!value) {
      this.unset("actualGasUsed");
    } else {
      this.set("actualGasUsed", Value.fromBigInt(<BigInt>value));
    }
  }

  get success(): boolean {
    let value = this.get("success");
    return value!.toBoolean();
  }

  set success(value: boolean) {
    this.set("success", Value.fromBoolean(value));
  }

  get revertReason(): Bytes | null {
    let value = this.get("revertReason");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set revertReason(value: Bytes | null) {
    if (!value) {
      this.unset("revertReason");
    } else {
      this.set("revertReason", Value.fromBytes(<Bytes>value));
    }
  }

  get blockTime(): BigInt | null {
    let value = this.get("blockTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockTime(value: BigInt | null) {
    if (!value) {
      this.unset("blockTime");
    } else {
      this.set("blockTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get blockNumber(): BigInt | null {
    let value = this.get("blockNumber");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set blockNumber(value: BigInt | null) {
    if (!value) {
      this.unset("blockNumber");
    } else {
      this.set("blockNumber", Value.fromBigInt(<BigInt>value));
    }
  }

  get network(): string | null {
    let value = this.get("network");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set network(value: string | null) {
    if (!value) {
      this.unset("network");
    } else {
      this.set("network", Value.fromString(<string>value));
    }
  }

  get input(): Bytes | null {
    let value = this.get("input");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set input(value: Bytes | null) {
    if (!value) {
      this.unset("input");
    } else {
      this.set("input", Value.fromBytes(<Bytes>value));
    }
  }

  get target(): Bytes | null {
    let value = this.get("target");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set target(value: Bytes | null) {
    if (!value) {
      this.unset("target");
    } else {
      this.set("target", Value.fromBytes(<Bytes>value));
    }
  }

  get callData(): Bytes | null {
    let value = this.get("callData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set callData(value: Bytes | null) {
    if (!value) {
      this.unset("callData");
    } else {
      this.set("callData", Value.fromBytes(<Bytes>value));
    }
  }

  get beneficiary(): Bytes | null {
    let value = this.get("beneficiary");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set beneficiary(value: Bytes | null) {
    if (!value) {
      this.unset("beneficiary");
    } else {
      this.set("beneficiary", Value.fromBytes(<Bytes>value));
    }
  }

  get factory(): Bytes | null {
    let value = this.get("factory");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set factory(value: Bytes | null) {
    if (!value) {
      this.unset("factory");
    } else {
      this.set("factory", Value.fromBytes(<Bytes>value));
    }
  }
}

export class Withdrawn extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Withdrawn entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Withdrawn must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Withdrawn", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Withdrawn | null {
    return changetype<Withdrawn | null>(
      store.get("Withdrawn", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get withdrawAddress(): Bytes {
    let value = this.get("withdrawAddress");
    return value!.toBytes();
  }

  set withdrawAddress(value: Bytes) {
    this.set("withdrawAddress", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }

  get transactionHash(): Bytes {
    let value = this.get("transactionHash");
    return value!.toBytes();
  }

  set transactionHash(value: Bytes) {
    this.set("transactionHash", Value.fromBytes(value));
  }
}