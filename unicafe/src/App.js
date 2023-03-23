import { useState } from 'react'

const StatisticLine = (props) => <tr><td>{props.text}</td><td>{props.value}</td></tr>

const Statistics = (props) => {
  const good = props.values.good
  const neutral = props.values.neutral
  const bad = props.values.bad
  const all = props.values.good + props.values.neutral + props.values.bad
  const average = ((props.values.good * 1 + props.values.bad * -1) / all).toFixed(1)
  const positive = (good / all * 100).toFixed(1).toString() + " %"

  if (all === 0) return (
    <div>No feedback given</div>
  )

  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={all} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
      </tbody>
    </table>
  )

}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics values={{good: good, neutral: neutral, bad: bad}} />
    </div>
  )
}

export default App