/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/timelock.json`.
 */
export type Timelock = {
  "address": "81eTCSx3zoUi8Q2ewTPJgfiJk32AR1mXnSTj6BJ5aKa",
  "metadata": {
    "name": "timelock",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "lockSol",
      "discriminator": [
        181,
        15,
        15,
        99,
        159,
        87,
        241,
        42
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "arg",
                "path": "seed"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vaultPda"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "seed",
          "type": "u64"
        },
        {
          "name": "lockedAmount",
          "type": "u64"
        },
        {
          "name": "unlockAt",
          "type": "i64"
        }
      ]
    },
    {
      "name": "withdrawSol",
      "discriminator": [
        145,
        131,
        74,
        136,
        65,
        137,
        42,
        38
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "vaultPda",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  100,
                  97
                ]
              },
              {
                "kind": "account",
                "path": "vault_pda.seed",
                "account": "vaultPda"
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  118,
                  97,
                  117,
                  108,
                  116
                ]
              },
              {
                "kind": "account",
                "path": "vaultPda"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "vaultPda",
      "discriminator": [
        109,
        182,
        77,
        81,
        208,
        30,
        110,
        107
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "unlockTimestampInPast",
      "msg": "Unlock timestamp cannot be in the past"
    },
    {
      "code": 6001,
      "name": "unlockTimeNotReached",
      "msg": "Unlock time not reached yet"
    },
    {
      "code": 6002,
      "name": "solAmountNotMatching",
      "msg": "Disparity in locked amount and amount held in vault"
    },
    {
      "code": 6003,
      "name": "lockingZeroSolError",
      "msg": "Cannot lock zero SOL"
    }
  ],
  "types": [
    {
      "name": "vaultPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "seed",
            "type": "u64"
          },
          {
            "name": "lockedAmount",
            "type": "u64"
          },
          {
            "name": "unlockAt",
            "type": "i64"
          },
          {
            "name": "bump",
            "type": "u8"
          },
          {
            "name": "vaultBump",
            "type": "u8"
          }
        ]
      }
    }
  ]
};
