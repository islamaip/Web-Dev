def min(a,b,c,d):
    numbers = [a,b,c,d]
    numbers.sort()
    return numbers[0]

a,b,c,d = input().split()

print(min(int(a),int(b),int(c),int(d)))