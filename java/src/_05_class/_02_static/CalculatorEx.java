package _05_class._02_static;

public class CalculatorEx {
    public static void main(String[] args) {
        int num1 = 10;
        int num2 = 5;

        double circleArea = num1 * num1 * Calculator.pi;
        int plusResult = Calculator.plus(num1, num2);
        int minusResult = Calculator.minus(num1, num2);

        System.out.println("Circle Area: " + circleArea);
        System.out.println("Plus Result: " + plusResult);
        System.out.println("Minus Result: " + minusResult);

        Calculator c1 = new Calculator();
        Calculator c2 = new Calculator();

        System.out.println(c1.count);
        System.out.println(c2.count);
        System.out.println(Calculator.count);
    }
}
