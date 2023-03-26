num = input()
word = num[::-1]
cnt = 0
for i in range(0,len(word)):
    if(word[i] == '0'):
        cnt += 1
    else:
        break

print(word[cnt:])