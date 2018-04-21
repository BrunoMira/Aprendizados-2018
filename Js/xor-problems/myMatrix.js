
class Matrix {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.data = [];

        for (let x = 0; x < this.rows; x++) {
            this.data[x] = [];

            for (let y = 0; y < this.cols; y++) {
                this.data[x][y] = 0;

            }
        }
    }

    static multiply(m1, m2) {

        if (m1.cols !== m2.rows) {
            console.log("Columns of B must match of Rows of A");
            return;
        }

        let result = new Matrix(m1.rows, m2.cols);

        for (let i = 0; i < result.rows; i++) {
            for (let j = 0; j < result.cols; j++) {

                let sum = 0;

                for (let k = 0; k < m1.cols; k++)
                    sum += m1.data[i][k] * m2.data[k][j];

                result.data[i][j] = sum;
            }
        }

        return result;
    }

    static fromArray(arr) {
        let m = new Matrix(arr.length, 1);

        for (let index = 0; index < arr.length; index++) {
            m.data[index][0] = arr[index];

        }

        return m;

    }

    static subtract(a, b) {
        // TODO Return a ner Matrix a-b

        let result = new Matrix(a.rows, a.cols);

        for (let x = 0; x < a.rows; x++) {
            for (let y = 0; y < a.cols; y++) {
                result.data[x][y] = a.data[x][y] - b.data[x][y];

            }
        }

        return result;

    }

    static reverse(matriz) {
        var result = new Matrix(matriz.cols, matriz.rows);

        for (let i = 0; i < matriz.rows; i++) {
            for (let j = 0; j < matriz.cols; j++) {
                result.data[j][i] = matriz.data[i][j];
            }
        }

        return result;
    }

    static map(matrix, fn) {

        let result = new Matrix(matrix.rows, matrix.cols);


        for (let i = 0; i < matrix.rows; i++) {

            for (let j = 0; j < matrix.cols; j++) {
                result.data[i][j] = fn(matrix.data[i][j]);

            }

        }

        return result

    }

    toArray() {
        let arr = [];

        for (let i = 0; i < this.rows; i++) {

            for (let j = 0; j < this.cols; j++) {
                arr.push(this.data[i][j]);

            }

        }

        return arr;

    }


    multiply(n) {

        if (n instanceof Matrix) {
            // hadamard product
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n.data[i][j];
                }
            }
        } else {
            // Scalar product
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] *= n;
                }
            }
        }
    }

    add(n) {

        if (n instanceof Matrix) {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n.data[i][j];
                }
            }
        } else {
            for (let i = 0; i < this.rows; i++) {
                for (let j = 0; j < this.cols; j++) {
                    this.data[i][j] += n;
                }
            }
        }
    }

    randomize() {

        this.data.forEach((coluns) => {

            for (let y = 0; y < coluns.length; y++) {
                coluns[y] = Math.floor(Math.random() * 2 - 1);

            }
        })

    }

    show() {
        console.table(this.data);
    }




    map(fn) {


        this.data.forEach((coluns) => {
            for (let y = 0; y < coluns.length; y++) {

                let value = coluns[y];
                coluns[y] = fn(value);

            }
        })

    }



}