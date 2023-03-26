num = int(input())
twoPower = 2
cnt = 1

while(num > twoPower):
    twoPower *= 2
    cnt += 1


if(num < 2):
    print(0)
else:
    print(cnt)