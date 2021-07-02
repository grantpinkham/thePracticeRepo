package java_sandbox012;

public class Main {
    public static void main(String[] args) {
        Vehicle vehicle1 = new Vehicle(4, 1, 4, true);
        Car car1 = new Car(true, false);
        car1.move();
        Truck truck1 = new Truck(4, 2, true, false);
        truck1.move();

    }
}
