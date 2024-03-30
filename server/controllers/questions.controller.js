const questionModel = require("../models/questions");

exports.fetchQuestions = async (req, res) => {
    try {
        const questions = await questionModel.find();
        res.status(200).json({ msg: "Success", data: questions });
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

exports.updateQuestions = async (req, res) => {
    try {
        const newQuestions = req.body.questions;        
        const existingQuestions = await questionModel.find({ question: { $in: newQuestions.map(q => q.question) } });

        const filteredQuestions = newQuestions.filter(newQuestion => !existingQuestions.some(existingQuestion => existingQuestion.question === newQuestion.question));

        if (filteredQuestions.length > 0) {
            await Promise.all(filteredQuestions.map(async (newQuestion) => {
                await questionModel.updateOne({ question: newQuestion.question }, { $set: newQuestion }, { upsert: true });
            }));
            res.status(201).json({ msg: "Success", data: "Questions updated successfully" });
        } else {
            res.status(200).json({ msg: "No new questions to update" });
        }
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};
