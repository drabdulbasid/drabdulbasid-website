export const articles = [
	{
		slug: 'honest-data-honest-models',
		title: 'Why Your Model Is Only as Honest as Your Data',
		excerpt:
			'Accuracy is a vanity metric when the dataset underneath is quietly lying. A field guide to auditing data before you ever fit a model.',
		date: '2025-11-18',
		category: 'Data Analysis',
		readTime: 7,
		image: 'https://images.unsplash.com/photo-1673898162925-292824ca9119?w=1280&h=832&fit=crop&q=80',
		caption: 'Field notes from a weekend spent auditing a student dataset',
		body: [
			{
				type: 'p',
				text: 'Every semester I watch the same scene unfold. A student trains a classifier, reports 94% accuracy, and beams. Then we open the dataset together and find duplicated rows, a leaky feature that encodes the label, and a train/test split that shuffles time-series data. The model was never good — the evaluation was just polite.',
			},
			{
				type: 'p',
				text: 'We teach machine learning as if the data arrives clean, labelled, and morally neutral. In practice, data is collected by people with deadlines, instruments with drift, and institutions with incentives. The dataset is not the territory; it is a report about the territory, written by someone who had reasons to write it that way.',
			},
			{ type: 'h2', text: 'The audit comes before the algorithm' },
			{
				type: 'p',
				text: 'In my research group, no model is trained until the dataset survives an audit. We check provenance first: who collected this, when, and what changed mid-collection? Then coverage: which populations, time periods, or edge cases are missing entirely? Finally leakage: does any feature know the answer in advance? These three questions catch the majority of silent failures I see in published work.',
			},
			{
				type: 'quote',
				text: 'A model is a compressed opinion about a dataset. If the dataset is dishonest, the model is a confident liar.',
			},
			{
				type: 'p',
				text: 'This is not pessimism — it is craft. A well-audited mediocre dataset will teach you more than a pristine-looking one that hides its gaps. The honest answer to "how good is your model?" is always a sentence that begins with "given this data, collected this way…".',
			},
			{ type: 'h2', text: 'A practical starting point' },
			{
				type: 'p',
				text: 'Start with a one-page data sheet for every dataset you touch: source, collection window, known biases, missingness pattern, and the one thing you most suspect is wrong with it. That last item matters most. If you cannot name a suspicion, you have not looked closely enough yet.',
			},
		],
	},
	{
		slug: 'anomaly-detection-python-onramp',
		title: 'A Gentle On-Ramp to Anomaly Detection with Python',
		excerpt:
			'Isolation forests, z-scores, and when a simple threshold beats a deep model. The tutorial I wish my students had before week one.',
		date: '2025-09-02',
		category: 'Machine Learning',
		readTime: 9,
		image: 'https://images.unsplash.com/photo-1591206246224-04b4624adef4?w=1280&h=832&fit=crop&q=80',
		caption: 'A threat dashboard mid-analysis in the security lab',
		body: [
			{
				type: 'p',
				text: 'Anomaly detection is where most practitioners first meet unsupervised learning, and it is unforgiving: there is no label column to lean on, and the interesting cases are, by definition, the rare ones. The good news is that the core ideas fit on an index card.',
			},
			{ type: 'h2', text: 'Start embarrassingly simple' },
			{
				type: 'p',
				text: 'Before reaching for anything with "forest" or "autoencoder" in the name, compute a z-score. For univariate, roughly normal data, flagging points more than three standard deviations from the mean catches real problems and — crucially — you can explain it to anyone in the room. I have seen this humble statistic outperform elaborate pipelines on small industrial datasets simply because it was understood and therefore trusted.',
			},
			{
				type: 'p',
				text: 'When the data is multivariate and the anomalies hide in combinations of features rather than in any single column, isolation forests are the natural next step. The intuition is lovely: anomalies are lonely, so random splits isolate them quickly. In scikit-learn the whole thing is a dozen lines, most of which are plotting.',
			},
			{ type: 'h2', text: 'The part tutorials skip' },
			{
				type: 'quote',
				text: 'The contamination parameter is not a hyperparameter. It is a belief about the world, stated as a number.',
			},
			{
				type: 'p',
				text: 'Every anomaly detector asks you how weird you expect the world to be. Set the expected anomaly rate too high and you drown in false alarms; too low and the one intrusion that mattered scrolls past. The honest workflow is iterative: flag, review by hand, adjust, and write down what you learned about the base rate.',
			},
			{
				type: 'p',
				text: 'My students build their first detector on network traffic from our lab, and the first week of "anomalies" is always the same: backups running at 3 a.m., a printer with an enthusiastic polling interval, one lecturer streaming lectures in 4K. That week of false positives teaches more about operational data than any lecture I have given.',
			},
		],
	},
	{
		slug: 'cybersecurity-is-a-data-problem',
		title: 'Cybersecurity Is a Data Problem',
		excerpt:
			'Firewalls and policies matter, but the modern security team wins or loses on how well it reads its own logs. Notes from applied research.',
		date: '2025-06-14',
		category: 'Cybersecurity',
		readTime: 6,
		image: 'https://images.unsplash.com/photo-1699100329878-7f28bb780787?w=1280&h=832&fit=crop&q=80',
		caption: 'A network graph of authenticated sessions, clustered by behaviour',
		body: [
			{
				type: 'p',
				text: 'Walk into almost any security operations room and you will find the same paradox: the organisation is drowning in telemetry and starving for insight. Every device logs everything, and almost nobody reads any of it until after the incident report is due.',
			},
			{
				type: 'p',
				text: 'My research group treats intrusion detection as a data engineering problem first and an algorithms problem second. The models are honestly the easy part. The hard part is that authentication logs live in one silo, network flows in another, and the asset inventory — the spreadsheet that tells you which machine actually matters — was last updated two reorganisations ago.',
			},
			{ type: 'h2', text: 'Signal before sophistication' },
			{
				type: 'p',
				text: 'In one recent project, the single most predictive feature for compromised accounts was not produced by any model. It was a join: login time against the HR leave calendar. People do not log in while on approved leave; attackers do not know the leave calendar. That feature caught more real incidents than the entire previous rule set.',
			},
			{
				type: 'quote',
				text: 'The attacker’s disadvantage is not compute. It is context — and context lives in your data, if you bother to join it.',
			},
			{
				type: 'p',
				text: 'This is why I argue that security teams should hire for data curiosity before tool certification. Tools change every budget cycle. The habit of asking "what would look strange here, and in which table would I see it?" does not.',
			},
		],
	},
	{
		slug: 'teaching-ml-low-resource-classrooms',
		title: 'Teaching Machine Learning in Low-Resource Classrooms',
		excerpt:
			'No GPU cluster, intermittent power, forty students per machine. What actually works when you teach ML where the infrastructure is the first constraint.',
		date: '2025-03-08',
		category: 'Teaching',
		readTime: 8,
		image: null,
		caption: null,
		body: [
			{
				type: 'p',
				text: 'Most machine learning curricula assume a silent partner: reliable electricity, a laptop per student, and bandwidth that never thinks about it. Teaching in a low-resource classroom means designing the course so that none of those assumptions are load-bearing.',
			},
			{ type: 'h2', text: 'Constraints are a curriculum' },
			{
				type: 'p',
				text: 'I stopped fighting the constraints and started teaching through them. When students cannot train large models, they learn to interrogate small ones deeply. When compute is scarce, feature engineering stops being a legacy topic and becomes the main event. Some of the most insightful model criticism I have read from students came from groups who could afford to train only three models all semester — so each one had to earn its existence.',
			},
			{
				type: 'p',
				text: 'Practically: everything runs offline-first. Datasets ship on USB drives alongside the slides. Notebooks are designed to run on four gigabytes of RAM. Every assignment has a "power-cut checkpoint" — a saved state you can resume from, because at some point in the semester you will need it.',
			},
			{
				type: 'quote',
				text: 'Scarcity does not lower the ceiling of a course. It raises the floor of understanding required to reach it.',
			},
			{
				type: 'p',
				text: 'The deeper point is about who gets to participate in this field. If machine learning education only works with abundant infrastructure, then its future authors are chosen by their electricity grid. I would rather teach the version of the subject that survives a power cut — it turns out that version is also, simply, better taught.',
			},
		],
	},
];

export function getArticle(slug) {
	return articles.find((a) => a.slug === slug);
}

export function formatArticleDate(dateStr) {
	return new Date(dateStr + 'T00:00:00').toLocaleDateString('en-GB', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
