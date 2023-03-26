num = int(input())
twoPower = 2
while(num > twoPower):
    twoPower *= 2

if(num == 1):
    print("YES")
elif(num == twoPower):
    print("YES")
else:
    print("NO")