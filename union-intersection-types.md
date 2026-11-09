# Combining Union and Intersection Types in TypeScript

## Introduction

Union and intersection types solve different problems. A union (`|`) means a value can match one of several types. An intersection (`&`) combines types, so a value must contain everything required by all of them. Using them together is helpful when an application accepts different kinds of records that share common information.

## A Practical Example

Imagine a support system with two kinds of tickets: a bug report or a feature request. Every ticket has an identity, while each kind has its own fields.

```ts
type TicketIdentity = {
  id: number;
  title: string;
};

type BugReport = {
  type: "bug";
  browser: string;
  stepsToReproduce: string;
};

type FeatureRequest = {
  type: "feature";
  requestedBy: string;
};

type SupportTicket = TicketIdentity & (BugReport | FeatureRequest);

function describeTicket(ticket: SupportTicket): string {
  if (ticket.type === "bug") {
    return `Bug #${ticket.id} in ${ticket.browser}: ${ticket.stepsToReproduce}`;
  }

  return `Feature #${ticket.id} requested by ${ticket.requestedBy}`;
}
```

The intersection requires every ticket to have `id` and `title`. The union allows the remaining part to be either a `BugReport` or a `FeatureRequest`. The `type` field acts as a discriminant, so TypeScript narrows the value after the `if` check and safely exposes the correct properties.

For example, a valid bug ticket includes an ID, title, type, browser, and reproduction steps. A feature ticket instead includes the requester. A ticket missing common or specific fields is rejected before the program runs.

## Conclusion

Use `&` to build a complete shared shape and `|` to model alternatives. Together, they describe real-world data accurately while keeping functions safe and readable.
