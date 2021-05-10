# Caesar-cipher-CLI

## How to start:
```javascript
git clone https://github.com/cup0ra/Caesar-cipher-CLI.git
cd Caesar-cipher-CLI
npm install 
```
### Options

1.  **-s, --shift [number]**: How many characters to shift it can be negative or positive number
2.  **-i, --input [string]**: This is the path to the file an input
3.  **-o, --output [string]**: This is the path to the file an output
4.  **-a, --action [string]**: an action encode/decode

### Example of use:
```javascript
node index -a encode -s 7 -i "./input.txt" -o "./output.txt"
node index -a encode -s 7 -i -o "./output.txt"
node index -a encode -s 7 -i "./input.txt"
node index -a encode -s 7
```
