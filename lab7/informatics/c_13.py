num = int(input())
cnt = 0

for i in range(0,num):
    exam = int(input())
    if(exam == 0):
        cnt += 1

print(cnt)