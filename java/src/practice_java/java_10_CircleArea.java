package practice_java;

import java.util.Scanner;

public class java_10_CircleArea {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the circle's radius: ");
        double radius = scanner.nextDouble();

        Circle circle = new Circle(radius);

        System.out.println("Circle's radius is " + circle.radius);
        System.out.println("Circle's area is " + circle.circleArea());
    }
}

class Circle {
    public final double radius;
    public static final double PI = 3.141592;
    public Circle(double radius) {
        this.radius = radius;
    }

    public double circleArea() {
        return radius * radius * PI;
    }
}
