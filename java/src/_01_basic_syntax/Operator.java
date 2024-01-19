package _01_basic_syntax;

// Operator
public class Operator {
    public static void main(String[] args) {
        int x, y;
        float a, b;

        // Substituting Operator ( = )
        // 대입 연산자 ( = )
        x = 10;
        y = 20;
        a = 5.0f;
        b = 10.0f;

        // Arithmetic operator : Arithmetic operation is possible for numeric data
        // 산술 연산자 : 숫자형 데이터에 대해서 산술 연산 가능
        System.out.println("--- x, y ---");
        System.out.println("x = " + x);
        System.out.println("y = " + y);
        System.out.println(" x + y = " + (x + y));
        System.out.println(" x - y = " + (x - y));
        System.out.println(" x * y = " + (x * y));
        System.out.println(" y / x = " + (y / x));
        System.out.println(" x % y = " + (x % y));

        System.out.println("--- a, b ---");
        System.out.println("a = " + a);
        System.out.println("b = " + b);
        System.out.println(" a + b = " + (a + b));
        System.out.println(" a - b = " + (a - b));
        System.out.println(" a * b = " + (a * b));
        System.out.println(" b / a = " + (b / a));
        System.out.println(" a % b = " + (a % b));

        // Increasing, Decreasing operator
        // 증가, 감소 연산자
        System.out.println("--- Increasing, Decreasing operator ---");
        System.out.println("x++ = " + x++ + ' ' + x); // 후위 증가
        System.out.println("++x = " +  ++x); // 전위 증가
        System.out.println("x-- = " + x-- + ' ' + x); // 후위 감소
        System.out.println("--x = " +  --x); // 전위 감소

        // Arithmetic substitution Operator
        // 산술적인 대입 연산자
        System.out.println("--- Arithmetic substitution Operator ---");
        System.out.println(x);
        System.out.println("x += 5 >> " + (x += 5));
        System.out.println("x -= 5 >> " + (x -= 5));
        System.out.println("x *= 5 >> " + (x *= 5));
        System.out.println("x /= 5 >> " + (x /= 5));
        System.out.println("x %= 5 >> " + (x %= 5));

        // Comparison operator: Operation result bullion (true/false)
        // 비교 연산자 : 연산 결과 불리언(true/false)
        System.out.println("--- Comparison operator ---");
        System.out.println("a > b >> " + (a > b));
        System.out.println("a < b >> " + (a < b));
        System.out.println("a >= b >> " + (a >= b));
        System.out.println("a <= b >> " + (a <= b));
        System.out.println("a == b >> " + (a == b));
        System.out.println("a != b >> " + (a != b));

        // Logical operator: Operation result bullion (true/false)
        // 논리 연산자: 연산 결과 불리언(true/false)
        boolean j = true;
        boolean k = false;
        boolean l = true;

        System.out.println("--- Logical operator ---");
        System.out.println("j && k >> " + (j && k)); // AND : j, k All must be true.
        System.out.println("j && l >> " + (j && l));
        System.out.println("j || k >> " + (j || k)); // OR : j, k If either of them is true.
        System.out.println("!j >> " + (!j)); // NOT : Denial

        // Ternary operator
        System.out.println("--- Ternary operator ---");
        System.out.println(x > y ? "x is bigger than y." : "x isn't greater than y.");

        // Calculate according to operator priority,
        // and if you want to specify explicitly, you can prioritize it in parentheses!
        // 연산자 우선 순위에 따라서 계산하고,
        // 명시적으로 지정하고 싶다면 괄호로 묶어서 우선순위 지정 가능하다!
    }
}
