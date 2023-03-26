num = int(input())
twoPower = 0

while(num >= 2 ** twoPower):
    print(2 ** twoPower, end=' ')
    twoPower += 1