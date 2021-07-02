package java_sandbox012;

public class Car extends Vehicle {
    private boolean sportsCar;
    private boolean sedan;
    public Car(boolean sportsCar, boolean sedan) {
        super(4, 1, 4, true);
    }
    private void transport(int num) {
        System.out.println("Car.transport() called");
    }

    @Override
    public void move() {
        transport(1);
        super.move();
    }
}
