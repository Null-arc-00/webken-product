'use client';
import { useState, useCallback } from 'react';
import styles from "../style/CounterButton.module.css";

export default function CounterButton() {
    const [leftDice, setLeftDice] = useState<number>(0);
    const [rightDice, setRightDice] = useState<number>(0);
    const [isRolling, setIsRolling] = useState<boolean>(false);
    const [result, setResult] = useState<string>('');

    const getRandomNumber = () => Math.floor(Math.random() * 101); // 0-100の乱数

    const DiceRoll = useCallback(() => {
        if (isRolling) return; // すでにロール中なら何もしない
        
        setIsRolling(true);
        setResult('');
        let count = 0;
        const finalLeftValue = getRandomNumber();
        const finalRightValue = getRandomNumber();
        
        const rollAnimation = () => {
            if (count < 20) { // 20回アニメーション
                setLeftDice(getRandomNumber());
                setRightDice(getRandomNumber());
                count++;
                // アニメーションの速度を徐々に遅くする
                const delay = 50 + (count * 2); // 50msから徐々に遅くなる
                setTimeout(rollAnimation, delay);
            } else {
                setLeftDice(finalLeftValue);
                setRightDice(finalRightValue);
                setIsRolling(false);
                // 結果判定
                if (finalLeftValue > finalRightValue) {
                    setResult('失敗');
                } else if (finalLeftValue < finalRightValue) {
                    setResult('成功');
                } else {
                    setResult('引き分け');
                }
            }
        };

        rollAnimation();
    }, [isRolling]);

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-center gap-8 mb-4">
                <div className="text-center text-blue-600">
                    <h3 className="text-lg font-semibold mb-2">左のダイス</h3>
                    <h2 className={`text-4xl font-bold transition-transform duration-100 ${
                        isRolling ? 'scale-110' : 'scale-100'
                    }`}>
                        {leftDice}
                    </h2>
                </div>
                <div className="text-center text-red-600">
                    <h3 className="text-lg font-semibold mb-2">右のダイス</h3>
                    <h2 className={`text-4xl font-bold transition-transform duration-100 ${
                        isRolling ? 'scale-110' : 'scale-100'
                    }`}>
                        {rightDice}
                    </h2>
                </div>
            </div>
            <div className={`text-2xl font-bold mb-4 ${
                result === '成功' ? 'text-green-600' : 
                result === '失敗' ? 'text-red-600' : 
                'text-gray-900'
            }`}>
                {result}
            </div>
            <button 
                type="button" 
                onClick={DiceRoll} 
                className={`${styles.button} ${
                    isRolling ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={isRolling}
            >
                {isRolling ? 'ロール中...' : 'サイコロを振る'}
            </button>
        </div>
    );
}