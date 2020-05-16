---
layout: default
---

## XOR (Exclusive OR)

Exclusive or or exclusive disjunction is a logical operation that outputs true only when inputs differ (one is true, the other is false).

It gains the name "exclusive or" because the meaning of "or" is ambiguous when both operands are true; the exclusive or operator excludes that case. This is sometimes thought of as "one or the other but not both". This could be written as "A or B, but not, A and B".

More generally, XOR is true only when an odd number of inputs are true. A chain of XORs—a XOR b XOR c XOR d (and so on)—is true whenever an odd number of the inputs are true and is false whenever an even number of inputs are true.

### ASCII to Different Bases

{:.table .table-dark .table-striped .table-bordered .table-hover}
Encoding Type   | What is Displayed | How to Distinguish
----------------|-------------------|--------------------
ASCII           | HI                | Easily readable
Binary          | 01001000 01001001 | Only 0s and 1s
Decimal         | 72 73             | Only numbers, between 32 and 126; used for HTML code (ex. N is `&#78;` for HTML)
Hexadecimal     | 48 49             | Represented from 0 to F (10=A, 11=B, ... 15 = F)
Base 64         | SEK=              | Contains a lot of random letters, some =s, +s & other symbol characters

### XOR Basics

An XOR or eXclusive OR is a bitwise operation indicated by ^ and shown by the following truth table:

{:.table .table-dark .table-striped .table-bordered .table-hover}
A | B | A ^ B
--|---|-------
0 | 0 | 0
0 | 1 | 1
1 | 0 | 1
1 | 1 | 0

So what XOR'ing bytes in the action `0xA0 ^ 0x2C` translates to is:

{:.table .table-dark .table-striped .table-bordered .table-hover}
0xA0 (Decimal = 160) | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0
0x2C (Decimal = 44) | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0
0xA0 ^ 0x2C =  0x8C ((Decimal = 140)) | 1 | 0 | 0 | 0 | 1 | 1 | 0 | 0

Note: XOR is reversable, which means, if `A ^ B = C` then  `A ^ C = B`. In this scenario, `0x8C ^ 0x2C = 0xA0` and `0x8C ^ 0xA0 = 0x2C`

### XOR Encryption

Take data represented in binary and perform an operation against another set of bits where  you get a 1 only if exactly one of the bits is 1.

It's a cheap way to encrypt data with a password.  Any data can be encrypted using XOR as shown in this python example below:

```python
>>> data = 'CAPTURETHEFLAG'
>>> key = 'A'
>>> encrypted = ''.join([chr(ord(x) ^ ord(key)) for x in data])
>>> encrypted
'\x02\x00\x11\x15\x14\x13\x04\x15\t\x04\x07\r\x00\x06'
>>> decrypted = ''.join([chr(ord(x) ^ ord(key)) for x in encrypted])
>>> decrypted
'CAPTURETHEFLAG'
```

This can be extended further by using a multibyte key by iterating in parallel with the data.

### Exploiting XOR Encryption

#### Single Byte XOR Encryption

Single Byte XOR Encryption is trivial to bruteforce as there are only 255 key combinations to try.

#### Multibyte XOR Encryption

Multibyte XOR gets exponentially harder the longer the key, but if the encrypted text is long enough, character frequency analysis is a viable method to find the key. Character Frequency Analysis means that we split the cipher text into groups based on the number of characters in the key. These groups then are bruteforced using the idea that some letters appear more frequently in the english alphabet than others.