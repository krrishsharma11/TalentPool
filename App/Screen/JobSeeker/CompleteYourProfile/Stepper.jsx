import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../../utils';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(1); // Current active step

  const steps = [1, 2, 3, 4, 5, 6]; // Total steps

  return (
    <View style={styles.container}>
      <View style={styles.stepperContainer}>
        {steps.map((step, index) => {
          const isCompleted = step < currentStep;
          const isActive = step === currentStep;

          return (
            <React.Fragment key={step}>
              {/* Circle */}
              <View style={styles.stepContainer}>
                <View
                  style={[
                    styles.circle,
                    isCompleted && styles.completedCircle,
                    isActive && styles.activeCircle,
                  ]}
                >
                  {isCompleted && <Text style={styles.checkMark}>✔</Text>}
                </View>
                {/* Dot inside active circle */}
                {isActive && <View style={styles.dot} />}
              </View>

              {/* Line */}
              {index < steps.length - 1 && (
                <View
                  style={[
                    styles.line,
                    isCompleted && styles.completedLine,
                  ]}
                />
              )}
            </React.Fragment>
          );
        })}
      </View>

      {/* Step Info */}
      {/* <Text style={styles.infoText}>Current Step: {currentStep}</Text> */}

      {/* Navigation Buttons */}
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentStep((prev) => Math.max(prev - 1, 1))}
        >
          <Text style={styles.buttonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length))}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginTop: theme.verticalSpacing.space_30,
  },
  stepperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  stepContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedCircle: {
    backgroundColor: '#7A3EFC',
    borderColor: '#7A3EFC',
  },
  activeCircle: {
    borderColor: '#7A3EFC',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#7A3EFC',
    position: 'absolute',
  },
  checkMark: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  line: {
    width: 40,
    height: 2,
    backgroundColor: '#bbb',
  },
  completedLine: {
    backgroundColor: '#7A3EFC',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#7A3EFC',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Stepper;
