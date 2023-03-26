num = input()
realNum = num[::-1]
dec = 0

for i in range(0,len(realNum)):
    if(realNum[i] == '1'):
        dec += 2 ** i

print(dec)