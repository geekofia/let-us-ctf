---
layout: default
---

## Caesar Cipher/ROT 13

The Caesar Cipher or Caesar Shift is a cipher which uses the alphabet in order to encode texts. It shifts a letter to a particular value.

`CAESAR` encoded with a shift of 8 is `KIMAIZ` so `ABCDEFGHIJKLMNOPQRSTUVWXYZ` becomes `IJKLMNOPQRSTUVWXYZABCDEFGH`.

`ROT13` is a special case of Caesar Cipher which has a fixed shift of 13, this is a trivial cipher to bruteforce because there are only 25 shifts. So the code to encode plain text to ROT13 can be used to decode the cipher text (NOT in other cases, will discuss below).

{:.table .table-dark .table-striped .table-bordered}
A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z
M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z | A | B | C | D | E | F | G | H | I | J | K | L

with Caesar Cipher shift 13 (ROT 13), `HI WORLD` will be ecnoded to `TU IADXP`.

So, if the shift is `1` then it'll bw `ROT1` and so on. In any `ROT<x>` each letter is shifted `x` places. We can use [rot13.com](https://rot13.com/) to encode/decode `ROT<x>`. I'll add a python script for local use later !

{:.note .g}
If a `ROTx` encoded text (cipher) is once again encrypted using `ROTy`, then the decoding process will start from last (outer most encryption). And the value of `ROT<x>` will be the difference between `26` and the `value used to encrypt`, in this case `ROT{26 - y}` => `ROT{26 - x}` respectively.

Let's see and example,

```txt
HELLO =(enc)(ROT13)=> URYYB =(enc)(ROT25)=> TQXXA
HELLO <=(dec)(ROT13)= URYYB <=(dec)(ROT1)= TQXXA
```

## Substitution Cipher

A Substitution Cipher is system of encryption where different symobls substitute a normal alphabet. Similar to Caesar cipher , but we can choose which letters substitute the alphabet.

For example, if below table represents substitute alphabet,

{:.table .table-dark .table-striped .table-bordered}
A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z
M | R | B | G | S | L | O | A | E | F | Y | W | D | K | U | Q | H | P | C | J | T | Z | V | X | I | N

then, `HI WORLD` will be ecnoded to `AE VUPWG`.

## Vigenere Cipher

A Vigenere Cipher is an extended Caesar Cipher where a message is encrypted using various Caesar shifted alphabets.

The following table can be used to encode a message:

![Vigenere Square](https://ctf101.org/cryptography/images/vigenere-square.png){: .img-fluid}

#### Encryption

For example, encrypting the text `SUPERSECRET` with `CODE` would follow this process:

- `CODE` gets padded to the length of `SUPERSECRET` so the key becomes `CODECODECOD`
- For each letter in `SUPERSECRET` we use the table to get the Alphabet to use, in this instance row `C` and column `S`
- The ciphertext's first letter then becomes `U`
- We eventually get `UISITGHGTSW`

#### Decryption

- Go to the row of the key, in this case `C`
- Find the letter of the cipher text in this row, in this case `U`
- The column is the first letter of the decrypted ciphertext, so we get `S`
- After repeating this process we get back to `SUPERSECRET`