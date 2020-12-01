/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 *
 * https://leetcode.com/problems/valid-number/description/
 *
 * algorithms
 * Hard (13.70%)
 * Total Accepted:    114.5K
 * Total Submissions: 830.6K
 * Testcase Example:  '"0"'
 *
 * Validate if a given string can be interpreted as a decimal number.
 *
 * Some examples:
 * "0" => true
 * " 0.1 " => true
 * "abc" => false
 * "1 a" => false
 * "2e10" => true
 * " -90e3   " => true
 * " 1e" => false
 * "e3" => false
 * " 6e-1" => true
 * " 99e2.5 " => false
 * "53.5e93" => true
 * " --6 " => false
 * "-+3" => false
 * "95a54e53" => false
 *
 * Note: It is intended for the problem statement to be ambiguous. You should
 * gather all requirements up front before implementing one. However, here is a
 * list of characters that can be in a valid decimal number:
 *
 *
 * Numbers 0-9
 * Exponent - "e"
 * Positive/negative sign - "+"/"-"
 * Decimal point - "."
 *
 *
 * Of course, the context of these characters also matters in the input.
 *
 * Update (2015-02-10):
 * The signature of the C++ function had been updated. If you still see your
 * function signature accepts a const char * argument, please click the reload
 * button to reset your code definition.
 *
 */
namespace $65_valid_number {
  const isNumberSymbol = (s: string) => /\d/.test(s);
  const isPMSymbol = (s: string) => s === '+' || s === '-';
  const isPointSymbol = (s: string) => s === '.';
  const isExponentSymbol = (s: string) => s === 'e';
  const enum STATE {
    INIT,
    INTEGER,
    FLOAT,
    EXPONENT_PM,
    EXPONENT,
    ERROR
  }

  const stateTransform: {
    [index: number]: (s: StringStream, numberStruct: NumberStruct) => STATE;
  } = {
    [STATE.INIT](s: StringStream, numberStruct: NumberStruct) {
      let state = STATE.ERROR;
      if (isPMSymbol(s.current)) {
        numberStruct.PMSymbol = {
          value: s.current,
          finded: true
        };
        s.next();
        state = STATE.INTEGER;
      } else if (isPointSymbol(s.current)) {
        numberStruct.float.finded = true;
        s.next();
        state = STATE.FLOAT;
      } else if (isNumberSymbol(s.current)) {
        return STATE.INTEGER;
      }
      return state;
    },
    [STATE.INTEGER](s: StringStream, numberStruct: NumberStruct) {
      let state = STATE.ERROR;
      if (isNumberSymbol(s.current)) {
        numberStruct.integer.value += s.current;
        numberStruct.integer.finded = true;
        state = STATE.INTEGER;
      } else if (isPointSymbol(s.current)) {
        numberStruct.float.finded = true;
        state = STATE.FLOAT;
      } else if (isExponentSymbol(s.current)) {
        numberStruct.exponent.finded = true;
        state = STATE.EXPONENT_PM;
      }
      s.next();
      return state;
    },
    [STATE.FLOAT](s: StringStream, numberStruct: NumberStruct) {
      let state = STATE.ERROR;
      if (isNumberSymbol(s.current)) {
        numberStruct.float.value += s.current;
        state = STATE.FLOAT;
        s.next();
      } else if (isExponentSymbol(s.current)) {
        numberStruct.exponent.finded = true;
        state = STATE.EXPONENT_PM;
        s.next();
      }
      return state;
    },
    [STATE.EXPONENT_PM](s: StringStream, numberStruct: NumberStruct) {
      let state = STATE.ERROR;
      if (isPMSymbol(s.current)) {
        numberStruct.exponentPMSymbol = {
          finded: true,
          value: s.current
        };
        s.next();
        state = STATE.EXPONENT;
      } else if (isNumberSymbol(s.current)) {
        state = STATE.EXPONENT;
      }
      return state;
    },
    [STATE.EXPONENT](s: StringStream, numberStruct: NumberStruct) {
      if (isNumberSymbol(s.current)) {
        numberStruct.exponent.value += s.current;
        numberStruct.exponent.finded = true;
        s.next();
        return STATE.EXPONENT;
      }
      return STATE.ERROR;
    }
  };

  export const isNumber = function(s: string) {
    const numberStruct: NumberStruct = {
      PMSymbol: generateNumberStructPart(),
      integer: generateNumberStructPart(),
      float: generateNumberStructPart(),
      exponentPMSymbol: generateNumberStructPart(),
      exponent: generateNumberStructPart()
    };
    const content = s.trim();
    const strem = new StringStream(s.trim());

    if (content === '') {
      return false;
    }

    let state = STATE.INIT;
    while (!strem.done) {
      state = stateTransform[state](strem, numberStruct);
      if (state === STATE.ERROR) {
        return false;
      }
    }
    const { integer, float, exponent } = numberStruct;

    // 3.  ==> ok
    if (float.finded && float.value === '') {
      if (!integer.finded) {
        return false;
      }
    }

    // 2e   ==> error
    // e58 ==> error
    if (exponent.finded) {
      if (exponent.value === '') {
        return false;
      }
      if (integer.value === '' && float.value === '') {
        return false;
      }
    }

    return true;
  };

  function generateNumberStructPart(): NumberStructPart {
    return {
      finded: false,
      value: ''
    };
  }
  interface NumberStructPart {
    finded: boolean;
    value: string;
  }
  interface NumberStruct {
    PMSymbol: NumberStructPart;
    integer: NumberStructPart;
    float: NumberStructPart;
    exponentPMSymbol: NumberStructPart;
    exponent: NumberStructPart;
  }
}

mountNsToGlobal($65_valid_number);

// include (./utils/mount-to-global.ts)
// include (./utils/string-stream.ts)
