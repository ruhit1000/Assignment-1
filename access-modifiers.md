# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control where a class property or method can be used. They help keep data safe and make a class easier to understand. TypeScript provides `public`, `private`, and `protected`, while `readonly` prevents a value from being changed after initialization.

## Understanding the Modifiers

Members are `public` by default, so code anywhere can use them. A `private` member is available only inside its own class. This is useful for hiding implementation details, such as a password or salary.

```ts
class Account {
  public owner: string;
  private balance: number;
  readonly accountNumber: string;

  constructor(owner: string, accountNumber: string, balance: number) {
    this.owner = owner;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}
```

`owner` and `deposit` can be used from outside the class. However, outside code cannot directly read or change `balance`; it must use the public methods. The `accountNumber` can be assigned in the constructor, but assigning it again causes a TypeScript error.

`protected` is slightly different from `private`. A protected member works inside its class and inside child classes, but not from unrelated outside code.

```ts
class PremiumAccount extends Account {
  protected rewardPoints = 0;
}
```

## Conclusion

These modifiers create clear boundaries. Use `public` for the supported interface, `private` for hidden details, `protected` for inheritance, and `readonly` for values that should not change.
