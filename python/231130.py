# 붙여쓰기
print(1, end='')
print(2)

# 띄여쓰기
print(1, end=' ')
print(2)

# 변환되는 name 값 넣는 방법
name = 'siri'
greeting= f'Hello {name}님!'
print(greeting)

# 이메일의 아이디만 가져오기
my_id = 'siri@sesac.com'
a = my_id.split('@')
print(a[0])

# mapping
nums1 = input()
nums2 = input().split()
nums3 = int,input().split()
nums4 = map(int, input().split())
nums5 = list(map(int, input().split()))
print(nums1)
print(nums2)
print(nums3)
print(nums4)
print(nums5)





#BOJ_1000_A+B
nums = list(map(int, input().split()))
answer = nums[0] + nums[1]
print(answer)

#SW_4828_minmax
T = int(input('')) # 테스트 케이스 숫자

for test_case in range(1, T+1):
    N = int(input()) # 각자의 케이스 안에서 숫자 갯수
    nums = list(map(int, input().split()))
    answer = max(nums) - min(nums)
    print(f'#{test_case} {answer}')