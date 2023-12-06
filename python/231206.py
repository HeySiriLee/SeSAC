# 카운팅 정렬
nums = [4, 4, 2, 3, 5, 5, 1, 1, 5]

count = [0] * (max(nums) + 1)  # 갯수 세는 리스트
sorted_nums = [0] * len(nums)  # 정렬된 리스트의 원형 틀

for num in nums:  # 일단 몇개씩 있는지 카운트
    count[num] += 1

for i in range(1, len(count)):  # 누적합
    count[i] = count[i] + count[i-1] # 자기꺼 자기 전의꺼 합!

for j in range(len(nums)-1, -1, -1):  # 뒤의 자리부터 뽑아서,
    sorted_nums[count[nums[j]]-1] = nums[j] # 5가 튀어나오면 5의 위치에 뒤부터 삽입.
    count[nums[j]] -= 1  # 위치 인덱스 하나 깎음

print(sorted_nums)

# set copy 방법
a = {1,2,3}
id(a)
b = set(a)
b
id(b)

# 재귀할당
def func(n):
    if n == 2:
        return

    print(f'{n}의 세상의 옴')
    func(n+1)
    print(f'{n}의 세상의 마무리')

func(0)

# 피보나치 수열
def fibo(n):
    if n < 2 :  # 1은 더 쪼개지지 않음
        return n
    else:
        return fibo(n-1) + fibo(n-2)  # 재귀 호출

print(fibo(10)) # 55