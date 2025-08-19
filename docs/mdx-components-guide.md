# MDX Components Guide

A comprehensive guide to using custom MDX components in your portfolio content for enhanced formatting and visual impact.

## Overview

This portfolio supports standard Markdown syntax plus custom React components that can be embedded directly in your `.mdx` files. These components provide enhanced formatting options while maintaining the simplicity of Markdown for regular content.

## Available Components

### 1. TileList & Tile

Display lists as visually appealing tiles instead of standard bullet points.

#### When to Use

- Feature highlights
- Key benefits or capabilities
- Process steps that need visual emphasis
- Any list where you want items to stand out

#### Basic Usage

```mdx
<TileList columns={3}>
  <Tile>
    **Safety First** Advanced collision detection with real-time analysis
  </Tile>
  <Tile>**Performance** Under 1s execution time for critical scenarios</Tile>
  <Tile>**Scalability** Handles 240M+ virtual kilometers efficiently</Tile>
</TileList>
```

#### Props

- `columns` (optional): Number of columns (1, 2, 3, or 4). Default: 3
- `className` (optional): Additional CSS classes

#### Column Options

```mdx
<!-- Single column (stacked) -->

<TileList columns={1}>

<!-- Two columns (good for comparisons) -->

<TileList columns={2}>

<!-- Three columns (default, balanced layout) -->

<TileList columns={3}>

<!-- Four columns (compact, lots of items) -->

<TileList columns={4}>
```

#### Advanced Example

```mdx
### Strategic Benefits

<TileList columns={2}>
  <Tile>
    **Market Leadership** First-mover advantage in autonomous vehicle simulation
    standards
  </Tile>
  <Tile>
    **Talent Attraction** Top engineers want to work on industry-defining
    projects
  </Tile>
  <Tile>
    **Partnership Leverage** Open source creates natural strategic alliance
    opportunities
  </Tile>
  <Tile>
    **Innovation Acceleration** Community contributions advance technology
    faster than internal development
  </Tile>
</TileList>
```

---

### 2. MetricGrid & Metric

Showcase key statistics and metrics in an eye-catching grid format.

#### When to Use

- Key performance indicators (KPIs)
- Success metrics and achievements
- Quantified results and impact
- Dashboard-style data presentation

#### Basic Usage

```mdx
<MetricGrid columns={4}>
  <Metric label="Users" value="212+" description="Active daily users" />
  <Metric label="Coverage" value="85%" description="Safety test scenarios" />
  <Metric
    label="Performance"
    value="Under 1s"
    description="Average execution time"
  />
  <Metric label="Adoption" value="95%" description="Team integration rate" />
</MetricGrid>
```

#### Props

**MetricGrid:**

- `columns` (optional): Number of columns (2, 3, or 4). Default: 4
- `className` (optional): Additional CSS classes

**Metric:**

- `label` (required): The metric name/category
- `value` (required): The numeric value or result
- `description` (optional): Additional context
- `className` (optional): Additional CSS classes

#### Layout Options

```mdx
<!-- Two columns (for fewer, larger metrics) -->

<MetricGrid columns={2}>
  <Metric
    label="Revenue Impact"
    value="€2M+"
    description="Annual cost savings"
  />
  <Metric label="Time Savings" value="40%" description="Reduced testing time" />
</MetricGrid>

<!-- Three columns (balanced layout) -->

<MetricGrid columns={3}>

<!-- Four columns (compact, many metrics) -->

<MetricGrid columns={4}>
```

#### Real-world Example

```mdx
## Impact Metrics

<MetricGrid columns={3}>
  <Metric
    label="Industry Partners"
    value="12+"
    description="OEMs and suppliers participating"
  />
  <Metric
    label="Academic Collaborations"
    value="6"
    description="Research institutions involved"
  />
  <Metric
    label="Community Contributors"
    value="45+"
    description="Active open-source developers"
  />
  <Metric
    label="Standard Adoption"
    value="100%"
    description="Major automotive OEMs using OpenPASS"
  />
  <Metric
    label="Research Papers"
    value="50+"
    description="Academic publications citing our work"
  />
  <Metric
    label="Cost Reduction"
    value="30%"
    description="Industry-wide simulation costs"
  />
</MetricGrid>
```

---

### 3. CalloutBox

Highlight important information, insights, tips, or warnings with styled boxes and icons.

#### When to Use

- Key insights or strategic thinking
- Important warnings or considerations
- Tips and best practices
- Success factors or lessons learned

#### Basic Usage

```mdx
<CalloutBox type="tip" title="Strategic Insight">
  Autonomous vehicle safety benefits from industry-wide collaboration, not
  competition. By open-sourcing our simulation platform, we transformed from
  competitive advantage to industry leadership.
</CalloutBox>
```

#### Props

- `type` (optional): Box style - "info", "warning", "success", "error", "tip". Default: "info"
- `title` (optional): Bold heading text
- `className` (optional): Additional CSS classes

#### All Types Examples

```mdx
<!-- Information (blue) -->

<CalloutBox type="info" title="Background Context">
  BMW's autonomous driving division needed to validate 45 critical safety
  scenarios before regulatory approval.
</CalloutBox>

<!-- Tip (purple) -->

<CalloutBox type="tip" title="Pro Tip">
  Start with MVP analytics foundation even for internal tools - it becomes
  invaluable for product decisions.
</CalloutBox>

<!-- Warning (amber) -->

<CalloutBox type="warning" title="Common Pitfall">
  Don't optimize for edge cases before validating core user workflows. We
  learned this the hard way.
</CalloutBox>

<!-- Success (green) -->

<CalloutBox type="success" title="Key Achievement">
  Achieved 85% safety coverage in 12 months - exceeding industry standards by
  20%.
</CalloutBox>

<!-- Error (red) -->

<CalloutBox type="error" title="Critical Lesson">
  Never deploy ML models without human oversight in safety-critical systems.
</CalloutBox>
```

#### Without Title

```mdx
<CalloutBox type="info">
  Sometimes you want to highlight information without a specific title. The
  component works perfectly for longer explanations or quotes.
</CalloutBox>
```

---

### 4. TechStack

Display technologies, tools, or frameworks in an organized, visually appealing way.

#### When to Use

- Technology lists
- Tool and framework showcases
- Skill demonstrations
- Platform capabilities

#### Basic Usage (Badges)

```mdx
<TechStack
  technologies={['React', 'TypeScript', 'Next.js', 'Tailwind CSS']}
  title="Frontend Stack"
/>
```

#### Tile Variant

```mdx
<TechStack
  technologies={[
    'Eclipse Foundation',
    'Open Source Governance',
    'C++',
    'Python',
    'CI/CD',
    'Docker',
  ]}
  title="Key Technologies"
  variant="tiles"
/>
```

#### Props

- `technologies` (required): Array of technology names
- `title` (optional): Section heading. Default: "Technologies Used"
- `variant` (optional): Display style - "badges" or "tiles". Default: "badges"
- `className` (optional): Additional CSS classes

#### Complete Example

```mdx
## Technical Implementation

<TechStack
  technologies={[
    'Python',
    'C++',
    'Unity',
    'Jenkins',
    'Docker',
    'Kubernetes',
    'PostgreSQL',
  ]}
  title="Core Platform Technologies"
  variant="tiles"
/>

<TechStack
  technologies={['OpenSCENARIO', 'OpenDRIVE', 'FMI/FMU', 'OSI']}
  title="Industry Standards"
  variant="badges"
/>
```

---

## Migration from Standard Markdown

### Before (Standard Lists)

```markdown
Key benefits:

- Safety is a shared challenge
- Standard-setting opportunity
- Innovation acceleration
- Network effects
```

### After (Tile Components)

```mdx
<TileList columns={2}>
  <Tile>
    **Safety Challenge** Industry-wide collaboration benefits everyone
  </Tile>
  <Tile>
    **Standard Setting** First-mover advantage in defining industry practices
  </Tile>
  <Tile>
    **Innovation Speed** Community contributions accelerate development
  </Tile>
  <Tile>**Network Effects** Better tools benefit all manufacturers</Tile>
</TileList>
```

### Before (Simple Metrics)

```markdown
Results:

- 212+ active users
- 85% safety coverage
- Under 1s performance
```

### After (Metric Grid)

```mdx
<MetricGrid columns={3}>
  <Metric
    label="Active Users"
    value="212+"
    description="Daily platform usage"
  />
  <Metric
    label="Safety Coverage"
    value="85%"
    description="Critical scenarios validated"
  />
  <Metric
    label="Performance"
    value="Under 1s"
    description="Average execution time"
  />
</MetricGrid>
```

---

## Best Practices

### 1. Component Selection

- **TileList**: Use for 3-6 related items that need visual emphasis
- **MetricGrid**: Perfect for 2-8 quantified results or KPIs
- **CalloutBox**: Ideal for single key insights or important context
- **TechStack**: Great for technology lists and capability showcases

### 2. Content Guidelines

- Keep tile content concise (1-2 lines max)
- Use strong metrics that tell a story
- Make callout titles descriptive and actionable
- Group related technologies together

### 3. Layout Recommendations

- 2 columns: Good for comparisons or when you have 4 items
- 3 columns: Balanced default, works for most content
- 4 columns: Only use when you have 8+ related items

### 4. Responsive Design

All components automatically adapt to mobile devices:

- 4 columns → 2 columns on tablet
- 3 columns → 2 columns on tablet → 1 column on mobile
- 2 columns → 1 column on mobile

### 5. Accessibility

Components include:

- Proper ARIA labels
- Semantic HTML structure
- High contrast colors
- Screen reader compatibility

---

## Troubleshooting

### Common Issues

#### 1. Component Not Rendering

```mdx
<!-- ❌ Wrong - components must be capitalized -->

<tilelist columns={3}>

<!-- ✅ Correct -->

<TileList columns={3}>
```

#### 2. Props Not Working

```mdx
<!-- ❌ Wrong - props must use curly braces for numbers -->

<TileList columns="3">

<!-- ✅ Correct -->

<TileList columns={3}>
```

#### 3. Markdown Inside Components

```mdx
<!-- ✅ Correct - Markdown works inside components -->

<Tile>**Bold text** and _italics_ work perfectly inside tiles.</Tile>
```

#### 4. Nesting Components

```mdx
<!-- ❌ Avoid - Don't nest interactive components -->

<CalloutBox>
  <MetricGrid>
    <Metric ... />
  </MetricGrid>
</CalloutBox>

<!-- ✅ Better - Use components side by side -->

<CalloutBox type="info">Key insight about the metrics below.</CalloutBox>

<MetricGrid columns={3}>
<Metric ... />
</MetricGrid>
```

### Build Errors

If you see MDX parsing errors:

1. **Check for unclosed tags**: Every `<Component>` needs a `</Component>` or use self-closing `<Component />`
2. **Validate prop syntax**: Numbers use `{3}`, strings use `"text"`
3. **Watch for special characters**: `<`, `>`, `&` in content may need escaping
4. **Component names**: Must be exactly as documented (case-sensitive)

---

## Advanced Usage

### Custom Styling

You can add custom classes to any component:

```mdx
<TileList className="my-custom-spacing" columns={3}>
  <Tile className="highlight-tile">Custom styled content</Tile>
</TileList>
```

### Combining Components

Create rich, layered content by combining multiple components:

```mdx
## Project Impact

<CalloutBox type="success" title="Mission Accomplished">
  We transformed BMW's internal testing tool into the industry standard for
  autonomous vehicle simulation.
</CalloutBox>

<MetricGrid columns={4}>
  <Metric
    label="Industry Partners"
    value="12+"
    description="Major OEMs participating"
  />
  <Metric
    label="Open Source Contributors"
    value="45+"
    description="Active developers"
  />
  <Metric
    label="Academic Papers"
    value="50+"
    description="Research citations"
  />
  <Metric
    label="Cost Savings"
    value="30%"
    description="Industry-wide reduction"
  />
</MetricGrid>

<TileList columns={3}>
  <Tile>
    **Technical Achievement** Built scalable simulation platform handling 240M+
    virtual kilometers
  </Tile>
  <Tile>
    **Business Impact** Became Eclipse OpenPASS foundation, setting industry
    standards
  </Tile>
  <Tile>
    **Strategic Victory** Positioned BMW as thought leader in automotive
    simulation
  </Tile>
</TileList>

<TechStack
  technologies={[
    'Eclipse Foundation',
    'C++',
    'Python',
    'OpenSCENARIO',
    'OpenDRIVE',
  ]}
  title="Technologies & Standards"
  variant="tiles"
/>
```

---

## Need Help?

- **Component Examples**: See `src/content/case-studies/adas-simulator-opensource.mdx` for live examples
- **Component Code**: Check `src/components/mdx/` for implementation details
- **Styling**: All components use Tailwind CSS classes for consistency

Remember: These components enhance your content but don't replace good storytelling. Use them strategically to highlight key information and improve readability.
